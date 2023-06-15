import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { UserD } from "./decorators/user.decorator";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("profile")
  @Auth()
  async getProfile(@UserD("_id") _id: string) {
    return this.userService.byId(_id);
  }
}
