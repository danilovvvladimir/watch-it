import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/user/user.schema";

type JwtPayload = {
  id: string;
  email: string;
  roles: string[];
  refreshToken: string;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("JWT_ACCESS_SECRET"),
    });
  }

  // async validate({ _id }) {
  //   return this.userModel.findById(_id).exec();
  // }

  async validate(payload: JwtPayload) {
    const user = this.userModel.findById(payload.id);

    if (!user) {
      throw new UnauthorizedException("ne login");
    }

    return {
      userId: payload.id,
      email: payload.email,
      roles: payload.roles,
      refreshToken: payload.refreshToken,
    };
  }
}
