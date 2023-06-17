import { Injectable } from "@nestjs/common";
import { Model, Types } from "mongoose";
import { Rating } from "./rating.schema";
import { MovieService } from "src/movie/movie.service";
import { SetRatingDTO } from "./dto/set-rating.dto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private readonly ratingModel: Model<Rating>,
    private readonly movieService: MovieService,
  ) {}

  async getMovieValueByUser(movieId: Types.ObjectId, userId: Types.ObjectId) {
    return this.ratingModel
      .findOne({ movieId, userId })
      .select("value")
      .exec()
      .then((data) => (data ? data.value : 0));
  }

  async averageRatingMovie(movieId: Types.ObjectId | string) {
    const movieRatings: Rating[] = await this.ratingModel
      .aggregate()
      .match({ movieId: new Types.ObjectId(movieId) })
      .exec();

    return (
      movieRatings.reduce((acc, item) => acc + item.value, 0) /
      movieRatings.length
    );
  }

  async setRating(userId: Types.ObjectId, dto: SetRatingDTO) {
    const { movieId, value } = dto;

    const newRating = await this.ratingModel
      .findOneAndUpdate(
        { movieId, userId },
        {
          userId,
          movieId,
          value,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      )
      .exec();

    const averageRating = await this.averageRatingMovie(movieId);

    await this.movieService.updateRating(movieId, averageRating);

    return newRating;
  }
}
