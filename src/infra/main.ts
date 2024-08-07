import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { AppModule } from "../app.module";
import { EnvService } from "./env/env.service";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  app.setGlobalPrefix("/v1");

  const envService = app.get(EnvService);
  const port = envService.get("PORT");

  await app
    .listen(port)
    .then(async () =>
      console.log(`Server is running on url ${await app.getUrl()} 🔥`),
    );
}
bootstrap();
