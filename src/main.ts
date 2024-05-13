import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局开启
  app.useGlobalFilters(new HttpExceptionFilter);
  await app.listen(3000);
}
bootstrap();
