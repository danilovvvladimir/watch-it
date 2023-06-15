import { UseGuards, applyDecorators } from "@nestjs/common";
import { JwtAuthGuard } from "../guard/jwt.guard";
import { AdminGuard } from "../guard/admin.guard";

// enum Roles {
//   ADMIN = "admin",
//   USER = "user",
// }
type roles = "admin" | "user" | undefined;

export const Auth = (role: roles = "user") =>
  applyDecorators(
    role === "admin"
      ? UseGuards(JwtAuthGuard, AdminGuard)
      : UseGuards(JwtAuthGuard),
  );
