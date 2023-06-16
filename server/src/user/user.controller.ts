import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { UserD } from "./decorators/user.decorator";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ==> Get <==

  @Get("profile")
  @Auth()
  async getProfile(@UserD("_id") _id: string) {
    return this.userService.byId(_id);
  }

  @Get()
  @Auth("admin")
  async getAllUsers(@Query("searchTerm") searchTerm?: string) {
    return this.userService.getAllUsers(searchTerm);
  }

  @Get("count")
  @Auth("admin")
  async accamulateUsers() {
    return this.userService.getAllUsersCount();
  }

  @Get(":id")
  @Auth("admin")
  async getUserProfile(@Param("id", IdValidationPipe) id: string) {
    return this.userService.byId(id);
  }

  // ==> Put <==

  @UsePipes(new ValidationPipe())
  @Put("profile")
  @HttpCode(200)
  @Auth()
  async updateProfile(@UserD("_id") _id: string, @Body() dto: UpdateUserDTO) {
    return this.userService.updateUser(_id, dto);
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateUserProfile(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: UpdateUserDTO,
  ) {
    return this.userService.updateUser(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteUserProfile(@Param("id", IdValidationPipe) id: string) {
    return this.userService.deleteUser(id);
  }
}
