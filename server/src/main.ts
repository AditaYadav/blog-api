import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppDataSource } from 'ormconfig';
import appConfig from './config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));


  // swagger setup
  const config = new DocumentBuilder()
    .setTitle("Blog")
    .setDescription("Blog Core API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  // Initialize DB Connection
  await AppDataSource.initialize();

  await app.listen(appConfig.PORT);
}
bootstrap();
