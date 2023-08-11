import { IsEmail, IsString, MinLength } from "class-validator";

export class AuthLoginDTO {
  @IsEmail()
  email: string;

  @MinLength(8, {
    message: "Password cannot be less than 8 characters!",
  })
  @IsString()
  password: string;
}

export class AuthRegisterDTO {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8, {
    message: "Password cannot be less than 8 characters!",
  })
  @IsString()
  password: string;
}
