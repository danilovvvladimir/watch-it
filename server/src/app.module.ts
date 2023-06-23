import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { GenreModule } from "./genre/genre.module";
import { FileModule } from "./file/file.module";
import { ActorModule } from "./actor/actor.module";
import { MovieModule } from "./movie/movie.module";
import { RatingModule } from "./rating/rating.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UserModule,
    GenreModule,
    FileModule,
    ActorModule,
    MovieModule,
    RatingModule,
  ],
})
export class AppModule {}
