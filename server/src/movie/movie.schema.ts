import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type MovieDocument = HydratedDocument<Movie>;

export class MovieParameters {
  @Prop()
  year: number;

  @Prop()
  duration: number;

  @Prop()
  country: string;
}

@Schema({
  _id: true,
  timestamps: true,
})
export class Movie {
  _id: Types.ObjectId;

  @Prop({ unique: true })
  title: string;

  @Prop({ unique: true })
  slug: string;

  @Prop()
  parameters: MovieParameters;

  @Prop()
  description: string;

  @Prop({ unique: true })
  videoUrl: string;

  @Prop()
  poster: string;

  @Prop()
  bigPoster: string;

  @Prop({ default: 4.0 })
  rating?: number;

  @Prop()
  genres: string[];

  @Prop()
  actors: string[];

  @Prop({ default: false })
  isSendTelegram?: boolean;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
