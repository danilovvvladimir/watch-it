import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model, Types } from "mongoose";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { genSalt, hash } from "bcryptjs";
import {
  USER_EMAIL_TAKEN_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  USER_UPDATED_MESSAGE,
} from "./constants/user.constants";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findById(_id: string) {
    const user = await this.userModel.findById(_id);

    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND_MESSAGE);
    }

    return user;
  }

  // async updateUser(_id: string, dto: UpdateUserDTO) {
  //   const user = await this.findById(_id);
  //   const isSameUser = await this.userModel.findOne({ email: dto.email });

  //   if (isSameUser && String(_id) !== String(isSameUser._id)) {
  //     throw new NotFoundException(USER_EMAIL_TAKEN_MESSAGE);
  //   }

  //   if (dto.password) {
  //     const salt = await genSalt(10);
  //     user.password = await hash(dto.password, salt);
  //   }

  //   user.email = dto.email;

  //   if (dto.isAdmin || !dto.isAdmin) {
  //     user.isAdmin = dto.isAdmin;
  //   }

  //   await user.save();

  //   return { message: USER_UPDATED_MESSAGE };
  // }

  async getAllUsersCount() {
    return this.userModel.find().count().exec();
  }

  async getAllUsers(searchTerm?: string) {
    let options = {};

    if (searchTerm) {
      options = {
        $or: [
          {
            email: new RegExp(searchTerm, "i"),
          },
        ],
      };
    }

    return this.userModel
      .find(options)
      .select("-password -__v")
      .sort({
        createdAt: "desc",
      })
      .exec();
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  // async toggleFavorite(movieId: string, user: User) {
  //   const { favoriteMovies, _id } = user;

  //   await this.userModel.findByIdAndUpdate(_id, {
  //     favoriteMovies: favoriteMovies.includes(new Types.ObjectId(movieId))
  //       ? favoriteMovies.filter((id) => String(id) !== String(movieId))
  //       : [...favoriteMovies, movieId],
  //   });
  // }

  // async getFavoriteMovies(_id: string) {
  //   return this.userModel
  //     .findById(_id, "favoriteMovies")
  //     .populate({
  //       path: "favoriteMovies",
  //       populate: {
  //         path: "genres",
  //       },
  //     })
  //     .exec()
  //     .then((data) => {
  //       return data.favoriteMovies;
  //     });
  // }
}
