import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthDTO {
  @IsEmail()
  email: string;

  @MinLength(8, {
    message: "Password cannot be less than 8 characters!",
  })
  @IsString()
  password: string;
}
