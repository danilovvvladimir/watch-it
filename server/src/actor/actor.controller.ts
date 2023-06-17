import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { ActorService } from "./actor.service";
import { ActorDTO } from "./dto/actor.dto";

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
  @Auth("admin")
  async getActor(@Param("id", IdValidationPipe) id: string) {
    return this.actorService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @Auth("admin")
  async createActor() {
    return this.actorService.createActor();
  }

  @UsePipes(new ValidationPipe())
  @Put(":id")
  @HttpCode(200)
  @Auth("admin")
  async updateActor(@Param("id") id: string, @Body() dto: ActorDTO) {
    return this.actorService.updateActor(id, dto);
  }

  @Delete(":id")
  @HttpCode(200)
  @Auth("admin")
  async deleteActor(@Param("id", IdValidationPipe) id: string) {
    return this.actorService.deleteActor(id);
  }
}
