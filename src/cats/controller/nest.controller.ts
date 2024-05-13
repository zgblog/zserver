import { Controller, Get, Redirect } from "@nestjs/common";

@Controller('nest')
export class NestController {
    @Get()
    @Redirect('https://nestjs.com', 301)    // 重定向
    redirect() {
        
    }
}