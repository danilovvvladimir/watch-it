import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types, Schema as MongooseSchema } from "mongoose";
import { Role } from "./user.interface";

export type UserDocument = HydratedDocument<User>;

@Schema({
  _id: true,
  timestamps: true,
})
export class User {
  _id: Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  refreshToken?: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({
    type: [{ type: String, enum: Role }],
    default: [Role.USER],
  })
  roles: Role[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "Movie" }])
  favoriteMovies: Types.ObjectId[];

  createdAt?: Date;

  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
