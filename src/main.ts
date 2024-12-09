import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // CORS 설정
  app.enableCors({
    origin: 'http://localhost:3001', // 개발 시에만 사용
    credentials: true, // 쿠키 등을 사용하려면 true로 설정
  });

  await app.listen(3000);
}
bootstrap();
