import { Module } from "@nestjs/common";
import { RatingController } from "./rating.controller";
import { RatingService } from "./rating.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Rating, RatingSchema } from "./rating.schema";
import { MovieModule } from "src/movie/movie.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }]),
    MovieModule,
  ],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingModule {}
