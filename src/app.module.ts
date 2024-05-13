import { HttpException, Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exception/http-exception.filter';

@Module({
  imports: [CommonModule, CatsModule],  // 分模块
  controllers: [],
  providers: [  // 注册到模块上
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule {}
