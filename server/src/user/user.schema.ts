import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types, Schema as MongooseSchema } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({
  _id: true,
  timestamps: true,
})
export class User {
  _id: Types.ObjectId;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "Movie" }])
  favoriteMovies: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
