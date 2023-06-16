import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type UserDocument = HydratedDocument<Genre>;

@Schema({
  _id: true,
  timestamps: true,
})
export class Genre {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ unique: true })
  slug: string;

  @Prop()
  description: string;

  @Prop()
  icon: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
