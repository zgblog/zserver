import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "./logger.middleware";

@Global()
@Module({
    controllers: [],
    providers: [],
    exports: []
})
export class CommonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('')
    }

}