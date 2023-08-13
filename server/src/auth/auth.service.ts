import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User } from "src/user/user.schema";
import { compare, genSalt, hash } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { AuthLoginDTO, AuthRegisterDTO } from "./dto/auth.dto";
import {
  AUTH_ACCESS_DENIED_MESSAGE,
  AUTH_USER_EMAIL_ALREADY_EXISTS_MESSAGE,
  AUTH_USER_INVALID_PASSWORD_MESSAGE,
  AUTH_USER_NOT_FOUND_MESSAGE,
  AUTH_USER_USERNAME_ALREADY_EXISTS_MESSAGE,
} from "../constants/auth";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: AuthRegisterDTO) {
    const { email, password, username } = dto;

    const IsEmailAlreadyExist = await this.userModel.findOne({ email: email });

    if (IsEmailAlreadyExist) {
      throw new BadRequestException(AUTH_USER_EMAIL_ALREADY_EXISTS_MESSAGE);
    }

    const IsUsernameAlreadyExist = await this.userModel.findOne({
      username: username,
    });

    if (IsUsernameAlreadyExist) {
      throw new BadRequestException(AUTH_USER_USERNAME_ALREADY_EXISTS_MESSAGE);
    }

    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);

    const newUser = new this.userModel({
      email: email,
      username: username,
      password: passwordHash,
    });

    const user = await newUser.save();
    const tokens = await this.getTokens(user.id, user.email);

    return { user, ...tokens };
  }

  async login(dto: AuthLoginDTO) {
    const { email, password } = dto;
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND_MESSAGE);
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException(AUTH_USER_INVALID_PASSWORD_MESSAGE);
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return { tokens, user };
  }

  async logout(userId: Types.ObjectId) {
    this.userModel
      .findOneAndUpdate({ _id: userId }, { refreshToken: null })
      .exec();
  }

  async getTokens(userId: Types.ObjectId, email: string) {
    const roles = (await this.userModel.findById(userId)).roles;

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id: userId,
          email: email,
          roles: roles,
        },
        {
          secret: this.configService.get("JWT_ACCESS_SECRET"),
          expiresIn: "15m",
        },
      ),
      this.jwtService.signAsync(
        {
          id: userId,
          email: email,
          roles: roles,
        },
        {
          secret: this.configService.get("JWT_REFRESH_SECRET"),
          expiresIn: "7d",
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(userId: Types.ObjectId, refreshToken: string) {
    const salt = await genSalt(10);
    const hashedRefreshToken = await hash(refreshToken, salt);

    await this.userModel.findOneAndUpdate(
      { _id: userId },
      {
        refreshToken: hashedRefreshToken,
      },
    );
  }

  async refreshTokens(userId: Types.ObjectId, refreshToken: string) {
    const user = await this.userModel.findOne({ _id: userId });

    if (!user || !user.refreshToken)
      throw new ForbiddenException(AUTH_ACCESS_DENIED_MESSAGE);

    const refreshTokenMatches = await compare(refreshToken, user.refreshToken);

    if (!refreshTokenMatches)
      throw new ForbiddenException(AUTH_ACCESS_DENIED_MESSAGE);

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return { tokens: tokens, user };
  }
}
