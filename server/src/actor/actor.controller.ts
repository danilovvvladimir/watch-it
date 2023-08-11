import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { ActorService } from "./actor.service";
import { ActorDTO } from "./dto/actor.dto";
import { Roles } from "src/user/decorators/role.decorator";
import { AccessTokenGuard } from "src/auth/guard/accessToken.guard";
import { Role } from "src/user/user.interface";

@Controller("actors")
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get("by-slug/:slug")
  async bySlug(@Param("slug") slug: string) {
    return this.actorService.findBySlug(slug);
  }

  @Get()
  async getAllActors() {
    return this.actorService.getAllActors();
  }

  @Get(":id")
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async getActor(@Param("id", IdValidationPipe) id: string) {
    return this.actorService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async createActor() {
    return this.actorService.createActor();
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async updateActor(@Param("id") id: string, @Body() dto: ActorDTO) {
    return this.actorService.updateActor(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  async deleteActor(@Param("id", IdValidationPipe) id: string) {
    return this.actorService.deleteActor(id);
  }
}
