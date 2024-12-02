import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('NPL Fantasy API')
    .setDescription('API documentation for the NPL Fantasy application')
    .setVersion('1.0')
    .addBearerAuth()  // If you plan to use bearer authentication
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // Set up the Swagger UI at `/api`

  await app.listen(3000);
}
bootstrap();
