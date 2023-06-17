import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types, Schema as MongooseSchema } from "mongoose";

export type RatingDocument = HydratedDocument<Rating>;

@Schema({
  _id: true,
  timestamps: true,
})
export class Rating {
  _id: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User" })
  userId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "Movie" })
  movieId: Types.ObjectId;

  @Prop()
  value: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
