import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types, Schema as MongooseSchema } from "mongoose";

export type MovieDocument = HydratedDocument<Movie>;

export class MovieParameters {
  @Prop()
  year: number;

  @Prop()
  duration: number;

  @Prop()
  countries: string[];

  @Prop()
  ageLimit: number;
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

  @Prop()
  videoUrl: string;

  @Prop({ default: 0 })
  countOpened?: number;

  @Prop()
  poster: string;

  @Prop()
  bigPoster: string;

  @Prop({ default: 4.0 })
  rating?: number;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "Genre" }])
  genres: Types.ObjectId[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: "Actor" }])
  actors: Types.ObjectId[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
