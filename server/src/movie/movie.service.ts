import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./movie.schema";
import {
  MOVIE_DELETED_MESSAGE,
  MOVIE_NOT_FOUND_MESSAGE,
} from "./constants/movie.constants";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateMovieDTO } from "./dto/create-movie.dto";

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async findById(_id: string) {
    const movie = await this.movieModel.findById(_id);
    if (!movie) {
      throw new NotFoundException(MOVIE_NOT_FOUND_MESSAGE);
    }
    return movie;
  }

  async findBySlug(slug: string) {
    const movie = await this.movieModel.findOne({ slug });
    if (!movie) {
      throw new NotFoundException(MOVIE_NOT_FOUND_MESSAGE);
    }
    return movie;
  }

  async findByActor(actorId: Types.ObjectId) {
    return this.movieModel.find({ actors: actorId }).exec();
  }

  async findByGenres(genreIds: Types.ObjectId[]) {
    console.log(genreIds);

    return this.movieModel.find({ genres: { $in: genreIds } }).exec();
  }

  async updateCountOpened(slug: string) {
    return this.movieModel
      .findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } })
      .exec();
  }

  /* Admin area */

  async getAll(searchTerm?: string) {
    let options = {};

    if (searchTerm) {
      options = {
        $or: [
          {
            title: new RegExp(searchTerm, "i"),
          },
        ],
      };
    }

    return this.movieModel
      .find(options)
      .sort({ createdAt: "desc" })
      .populate("genres actors")
      .exec();
  }

  async createMovie(): Promise<Types.ObjectId> {
    const defaultValue: CreateMovieDTO = {
      bigPoster: "",
      actors: [],
      genres: [],
      description: "",
      poster: "",
      title: "",
      videoURL: "",
      slug: "",
      parameters: {
        country: "",
        duration: 0,
        year: 0,
        ageLimit: 0,
      },
    };
    const movie = await this.movieModel.create(defaultValue);
    return movie._id;
  }

  async updateMovie(id: string, dto: CreateMovieDTO) {
    const updateMovie = await this.movieModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!updateMovie) {
      throw new NotFoundException(MOVIE_NOT_FOUND_MESSAGE);
    }
    return updateMovie;
  }

  async deleteMovie(id: string) {
    const deletedDoc = await this.movieModel.findByIdAndDelete(id).exec();
    if (!deletedDoc) {
      throw new NotFoundException(MOVIE_NOT_FOUND_MESSAGE);
    }
    return { message: MOVIE_DELETED_MESSAGE };
  }

  async getMostPopular() {
    return this.movieModel
      .find({ countOpened: { $gt: 0 } })
      .sort({ countOpened: -1 })
      .populate("genres")
      .exec();
  }

  async updateRating(id: Types.ObjectId, newRating: number) {
    return this.movieModel
      .findByIdAndUpdate(
        id,
        {
          rating: newRating,
        },
        // {
        //   new: true,
        // },
      )
      .exec();
  }
}
