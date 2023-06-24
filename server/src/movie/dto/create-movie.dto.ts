import { IsArray, IsNumber, IsObject, IsString } from "class-validator";

class MovieParameters {
  @IsNumber()
  year: number;

  @IsNumber()
  duration: number;

  @IsString()
  countries: string[];

  @IsNumber()
  ageLimit: number;
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
  videoUrl: string;

  @IsString()
  imageNormal: string;

  @IsString()
  imageMedium: string;

  @IsString()
  imageSpinner: string;

  @IsArray()
  @IsString({ each: true })
  genres: string[];

  @IsArray()
  @IsString({ each: true })
  actors: string[];
}
