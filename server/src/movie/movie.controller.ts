import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Types } from "mongoose";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CreateMovieDTO } from "./dto/create-movie.dto";

@Controller("movies")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get("by-slug/:slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.movieService.findBySlug(slug);
  }

  @Get("by-actor/:actorId")
  async findByActor(
    @Param("actorId", IdValidationPipe) actorId: Types.ObjectId,
  ) {
    return this.movieService.findByActor(actorId);
  }

  @UsePipes(new ValidationPipe())
  @Post("by-genres")
  @HttpCode(200)
  async findByGenres(
    @Body("genreIds")
    genreIds: Types.ObjectId[],
  ) {
    return this.movieService.findByGenres(genreIds);
  }

  @Get()
  async getAllMovies(@Query("searchTerm") searchTerm?: string) {
    return this.movieService.getAll(searchTerm);
  }

  @Get("/most-popular")
  @Auth("admin")
  async getMostPopular() {
    return this.movieService.getMostPopular();
  }

  @UsePipes(new ValidationPipe())
  @Post("/update-count-opened")
  @HttpCode(200)
  async updateCountOpened(@Body("slug") slug: string) {
    return this.movieService.updateCountOpened(slug);
  }

  @Get(":id")
  @Auth("admin")
  async getById(@Param("id", IdValidationPipe) id: string) {
    return this.movieService.findById(id);
  }

  @Post()
  @HttpCode(200)
  @Auth("admin")
  async createMovie() {
    return this.movieService.createMovie();
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateMovie(
    @Param("id", IdValidationPipe) id: string,
    @Body() dto: CreateMovieDTO,
  ) {
    return this.movieService.updateMovie(id, dto);
  }

  @Delete(":id")
  @Auth("admin")
  async deleteMovie(@Param("id", IdValidationPipe) id: string) {
    return this.movieService.deleteMovie(id);
  }
}
