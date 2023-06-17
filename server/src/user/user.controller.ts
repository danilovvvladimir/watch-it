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
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { UserD } from "./decorators/user.decorator";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { User } from "./user.schema";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ==> Get <==

  @Get("profile")
  @Auth()
  async getProfile(@UserD("_id") _id: string) {
    return this.userService.findById(_id);
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
    return this.userService.findById(id);
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

  @Get("profile/favorites")
  @Auth()
  async getFavorites(@UserD("_id") _id: string) {
    return this.userService.getFavoriteMovies(_id);
  }

  @UsePipes(new ValidationPipe())
  @Put("profile/favorites")
  @HttpCode(200)
  @Auth()
  async toggleFavorite(
    @Body("movieId", IdValidationPipe) movieId: string,
    @UserD() user: User,
  ) {
    return this.userService.toggleFavorite(movieId, user);
  }
}
