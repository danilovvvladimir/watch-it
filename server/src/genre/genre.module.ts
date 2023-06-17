import { Module } from "@nestjs/common";
import { GenreService } from "./genre.service";
import { GenreController } from "./genre.controller";
import { Genre, GenreSchema } from "./genre.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieModule } from "src/movie/movie.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
    MovieModule,
  ],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}
