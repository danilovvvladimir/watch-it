import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { User } from "./user.schema";
import { AccessTokenGuard } from "src/auth/guard/accessToken.guard";
import { Roles } from "./decorators/role.decorator";
import { Role } from "./user.interface";
import { GetUser } from "./decorators/user.decorator";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("profile")
  @UseGuards(AccessTokenGuard)
  async getProfile(@GetUser("_id") _id: string) {
    return this.userService.findById(_id);
  }

  @Get()
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async getAllUsers(@Query("searchTerm") searchTerm?: string) {
    return this.userService.getAllUsers(searchTerm);
  }

  @Get("count")
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async accamulateUsers() {
    return this.userService.getAllUsersCount();
  }

  @Get(":id")
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async getUserProfile(@Param("id", IdValidationPipe) id: string) {
    return this.userService.findById(id);
  }

  // @UsePipes(new ValidationPipe())
  // @Put("profile")
  // @HttpCode(200)
  // @UseGuards(AccessTokenGuard)
  // async updateProfile(@GetUser("_id") _id: string, @Body() dto: UpdateUserDTO) {
  //   return this.userService.updateUser(_id, dto);
  // }

  // @UsePipes(new ValidationPipe())
  // @Put(":id")
  // @HttpCode(200)
  // @UseGuards(AccessTokenGuard)
  // @Roles(Role.ADMIN, Role.SUPERADMIN)
  // async updateUserProfile(
  //   @Param("id", IdValidationPipe) id: string,
  //   @Body() dto: UpdateUserDTO,
  // ) {
  //   return this.userService.updateUser(id, dto);
  // }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async deleteUserProfile(@Param("id", IdValidationPipe) id: string) {
    return this.userService.deleteUser(id);
  }

  // @Get("profile/favorites")
  // @UseGuards(AccessTokenGuard)
  // async getFavorites(@GetUser("_id") _id: string) {
  //   return this.userService.getFavoriteMovies(_id);
  // }

  // @UsePipes(new ValidationPipe())
  // @Put("profile/favorites")
  // @HttpCode(200)
  // @UseGuards(AccessTokenGuard)
  // async toggleFavorite(
  //   @Body("movieId", IdValidationPipe) movieId: string,
  //   @GetUser() user: User,
  // ) {
  //   return this.userService.toggleFavorite(movieId, user);
  // }
}
