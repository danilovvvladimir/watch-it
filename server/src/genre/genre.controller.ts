import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { GenreService } from "./genre.service";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { UpdateGenreDTO } from "./dto/update-genre.dto";
import { Role } from "src/user/user.interface";
import { Roles } from "src/user/decorators/role.decorator";
import { AccessTokenGuard } from "src/auth/guard/accessToken.guard";

@Controller("genres")
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get("by-slug/:slug")
  async bySlug(@Param("slug") slug: string) {
    return this.genreService.findBySlug(slug);
  }

  @Get("collections")
  async getCollections() {
    return this.genreService.getCollections();
  }

  @Get()
  async getAllGenres() {
    return this.genreService.getAllGenres();
  }

  @Get(":id")
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async getGenre(@Param("id", IdValidationPipe) id: string) {
    return this.genreService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async createGenre() {
    return this.genreService.createGenre();
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async updateGenre(@Param("id") id: string, @Body() dto: UpdateGenreDTO) {
    return this.genreService.updateGenre(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async deleteGenre(@Param("id", IdValidationPipe) id: string) {
    return this.genreService.deleteGenre(id);
  }
}
