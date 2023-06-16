import { IsString } from "class-validator";

export class ActorDTO {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  photo: string;
}
