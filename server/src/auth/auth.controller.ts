import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDTO, AuthRegisterDTO } from "./dto/auth.dto";
import { GetUser } from "src/user/decorators/user.decorator";
import { User } from "src/user/user.schema";
import { AccessTokenGuard } from "./guard/accessToken.guard";
import { RefreshTokenGuard } from "./guard/refreshToken.guard";
import { Types } from "mongoose";
import { JwtPayloadWithRt } from "./strategies/refreshToken.strategy";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("register")
  async register(@Body() dto: AuthRegisterDTO) {
    return this.authService.register(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("login")
  async login(@Body() dto: AuthLoginDTO) {
    return this.authService.login(dto);
  }

  @UseGuards(AccessTokenGuard)
  @HttpCode(200)
  @Post("logout")
  async logout(@GetUser() user: User) {
    return this.authService.logout(user._id);
  }

  @UseGuards(RefreshTokenGuard)
  @Get("refresh")
  refreshTokens(@GetUser() payload: JwtPayloadWithRt) {
    const userId = new Types.ObjectId(payload.id);
    const refreshToken = payload.refreshToken;

    return this.authService.refreshTokens(userId, refreshToken);
  }
}
