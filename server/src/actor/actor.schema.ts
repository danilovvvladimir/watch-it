import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type ActorDocument = HydratedDocument<Actor>;

@Schema({
  _id: true,
  timestamps: true,
})
export class Actor {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ unique: true })
  slug: string;

  @Prop()
  photo: string;
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
