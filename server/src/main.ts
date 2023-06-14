import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = 4444;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  await app.listen(PORT);
}
bootstrap();
