import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Actor } from "./actor.schema";
import { ActorDTO } from "./dto/actor.dto";
import { ACTOR_NOT_FOUND_MESSAGE } from "./constants/actor.constants";

@Injectable()
export class ActorService {
  constructor(@InjectModel(Actor.name) private actorModel: Model<Actor>) {}

  async findById(_id: string) {
    const genre = await this.actorModel.findById(_id);
    if (!genre) {
      throw new NotFoundException(ACTOR_NOT_FOUND_MESSAGE);
    }
    return genre;
  }

  async findBySlug(slug: string) {
    const genre = await this.actorModel.findOne({ slug });
    if (!genre) {
      throw new NotFoundException(ACTOR_NOT_FOUND_MESSAGE);
    }
    return genre;
  }

  async getAllActors(searchTerm?: string) {
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
    // aggregation

    return this.actorModel
      .find(options)
      .select("-__v")
      .sort({
        createdAt: "desc",
      })
      .exec();
  }

  async createActor() {
    const defaultValues: ActorDTO = {
      name: "",
      slug: "",
      photo: "",
    };

    const actor = await this.actorModel.create(defaultValues);

    return actor._id;
  }

  async updateActor(id: string, dto: ActorDTO) {
    const doc = await this.actorModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!doc) {
      throw new NotFoundException(ACTOR_NOT_FOUND_MESSAGE);
    }

    return doc;
  }

  async deleteActor(id: string) {
    const doc = await this.actorModel.findByIdAndDelete(id).exec();

    if (!doc) {
      throw new NotFoundException(ACTOR_NOT_FOUND_MESSAGE);
    }

    return doc;
  }
}
