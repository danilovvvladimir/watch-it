import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from "class-validator";

class MovieParameters {
  @IsNumber()
  year: number;

  @IsNumber()
  duration: number;

  @IsString()
  country: string;
}

export class CreateMovieDTO {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsObject()
  parameters: MovieParameters;

  @IsString()
  description: string;

  @IsString()
  videoURL: string;

  @IsString()
  poster: string;

  @IsString()
  bigPoster: string;

  @IsArray()
  @IsString({ each: true })
  genres: string[];

  @IsArray()
  @IsString({ each: true })
  actors: string[];

  @IsNumber()
  rating?: number;

  @IsBoolean()
  isSendTelegram?: boolean;
}
