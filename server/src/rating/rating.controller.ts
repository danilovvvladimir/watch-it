import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Types } from "mongoose";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { RatingService } from "./rating.service";
import { SetRatingDTO } from "./dto/set-rating.dto";
import { GetUser } from "src/user/decorators/user.decorator";
import { AccessTokenGuard } from "src/auth/guard/accessToken.guard";

@Controller("ratings")
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @UsePipes(new ValidationPipe())
  @Post("set-rating")
  @HttpCode(200)
  @UseGuards(AccessTokenGuard)
  async setRating(
    @GetUser("_id") userId: Types.ObjectId,
    @Body()
    dto: SetRatingDTO,
  ) {
    return this.ratingService.setRating(userId, dto);
  }

  @Get("/:movieId")
  @UseGuards(AccessTokenGuard)
  async getMovieValueByUser(
    @Param("movieId", IdValidationPipe) movieId: Types.ObjectId,
    @GetUser("_id") userId: Types.ObjectId,
  ) {
    return this.ratingService.getMovieValueByUser(movieId, userId);
  }
}
