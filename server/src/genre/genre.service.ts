import { Injectable, NotFoundException } from "@nestjs/common";
import { Genre } from "./genre.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateGenreDTO } from "./dto/update-genre.dto";

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre.name) private genreModel: Model<Genre>) {}

  async findById(_id: string) {
    const genre = await this.genreModel.findById(_id);
    if (!genre) {
      throw new NotFoundException("Genre not found!");
    }
    return genre;
  }

  async findBySlug(slug: string) {
    const genre = await this.genreModel.findOne({ slug });
    if (!genre) {
      throw new NotFoundException("Genre not found!");
    }
    return genre;
  }

  async getAllGenres(searchTerm?: string) {
    let options = {};

    if (searchTerm) {
      options = {
        $or: [
          {
            name: new RegExp(searchTerm, "i"),
          },
          {
            slug: new RegExp(searchTerm, "i"),
          },
        ],
      };
    }

    return this.genreModel
      .find(options)
      .select("-__v")
      .sort({
        createdAt: "desc",
      })
      .exec();
  }

  async createGenre() {
    const defaultValues: UpdateGenreDTO = {
      name: "",
      slug: "",
      description: "",
      icon: "",
    };

    const genre = await this.genreModel.create(defaultValues);

    return genre._id;
  }

  async updateGenre(id: string, dto: UpdateGenreDTO) {
    const doc = await this.genreModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!doc) {
      throw new NotFoundException("Genre not found");
    }

    return doc;
  }

  async deleteGenre(id: string) {
    const doc = await this.genreModel.findByIdAndDelete(id).exec();

    if (!doc) {
      throw new NotFoundException("Genre not found");
    }

    return doc;
  }
}
