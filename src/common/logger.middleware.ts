import { Injectable, NestMiddleware } from "@nestjs/common";

/**
 * 日志中间件
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        console.log('Request...')
        next()
    }
    
}