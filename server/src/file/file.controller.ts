import {
  Controller,
  HttpCode,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";
import { AccessTokenGuard } from "src/auth/guard/accessToken.guard";
import { Roles } from "src/user/decorators/role.decorator";
import { Role } from "src/user/user.interface";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller("files")
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @HttpCode(200)
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @UseInterceptors(FileInterceptor("image"))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Query("folder") folder?: string,
  ) {
    return this.fileService.saveFiles([file], folder);
  }
}
