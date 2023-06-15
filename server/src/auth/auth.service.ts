import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/user.schema";
import { AuthDTO } from "./dto/auth.dto";
import { compare, genSalt, hash } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: AuthDTO) {
    const { email, password } = dto;

    const IsUserAlreadyExist = await this.userModel.findOne({ email: email });

    if (IsUserAlreadyExist) {
      throw new BadRequestException(
        "User with this email is already in the system",
      );
    }

    const salt = await genSalt(10);

    const passwordHash = await hash(password, salt);

    const newUser = new this.userModel({
      email: email,
      password: passwordHash,
    });

    const user = await newUser.save();
    const tokens = await this.issueTokenPair(String(user._id));

    return { user, ...tokens };
  }

  async login(dto: AuthDTO) {
    const user = await this.validateUser(dto);
    const tokens = await this.issueTokenPair(String(user._id));

    return { user, ...tokens };
  }

  async validateUser(dto: AuthDTO): Promise<User> {
    const { email, password } = dto;
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      throw new UnauthorizedException("User is not found");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid Password");
    }
    return user;
  }

  async issueTokenPair(userId: string) {
    const data = { _id: userId };

    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: "15d",
    });

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: "1h",
    });

    return { refreshToken, accessToken };
  }
}
