import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model } from "mongoose";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { genSalt, hash } from "bcryptjs";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async byId(_id: string) {
    const user = await this.userModel.findById(_id);
    if (!user) {
      throw new NotFoundException("User not found!");
    }
    return user;
  }

  async updateUser(_id: string, dto: UpdateUserDTO) {
    const user = await this.byId(_id);
    const isSameUser = await this.userModel.findOne({ email: dto.email });

    if (isSameUser && String(_id) !== String(isSameUser._id)) {
      throw new NotFoundException("Email is already taken");
    }

    if (dto.password) {
      const salt = await genSalt(10);
      user.password = await hash(dto.password, salt);
    }

    user.email = dto.email;

    if (dto.isAdmin || !dto.isAdmin) {
      user.isAdmin = dto.isAdmin;
    }

    await user.save();

    return { message: "UserProfile has been succussfully updated" };
  }

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
}
