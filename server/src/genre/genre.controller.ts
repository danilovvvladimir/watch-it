import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { GenreService } from "./genre.service";
import { Auth } from "src/auth/decorators/auth.decorator";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { UpdateGenreDTO } from "./dto/update-genre.dto";

@Controller("genre")
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get("by-slug/:slug")
  async bySlug(@Param("slug") slug: string) {
    return this.genreService.findBySlug(slug);
  }

  @Get()
  async getAllGenres() {
    return this.genreService.getAllGenres();
  }

  @Get(":id")
  @Auth("admin")
  async getGenre(@Param("id", IdValidationPipe) id: string) {
    return this.genreService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @Auth("admin")
  async createGenre() {
    return this.genreService.createGenre();
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateGenre(@Param("id") id: string, @Body() dto: UpdateGenreDTO) {
    return this.genreService.updateGenre(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteGenre(@Param("id", IdValidationPipe) id: string) {
    return this.genreService.deleteGenre(id);
  }
}
