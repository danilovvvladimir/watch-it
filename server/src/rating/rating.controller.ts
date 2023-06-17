import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Types } from "mongoose";
import { Auth } from "src/auth/decorators/auth.decorator";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { RatingService } from "./rating.service";
import { UserD } from "src/user/decorators/user.decorator";
import { SetRatingDTO } from "./dto/set-rating.dto";

@Controller("ratings")
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @UsePipes(new ValidationPipe())
  @Post("set-rating")
  @HttpCode(200)
  @Auth()
  async setRating(
    @UserD("_id") userId: Types.ObjectId,
    @Body()
    dto: SetRatingDTO,
  ) {
    return this.ratingService.setRating(userId, dto);
  }

  @Get("/:movieId")
  @Auth()
  async getMovieValueByUser(
    @Param("movieId", IdValidationPipe) movieId: Types.ObjectId,
    @UserD("_id") userId: Types.ObjectId,
  ) {
    return this.ratingService.getMovieValueByUser(movieId, userId);
  }
}
