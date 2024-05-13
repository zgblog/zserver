import { Body, Controller, Get, Header, HttpCode, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { CreateCatDto } from "src/cats/dto/cats.dto";
import { Cat } from "src/cats/interfaces/cats.interface";
import { CatsService } from "src/cats/service/cats.service";

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    // @HttpCode(204)                      // 自定义响应码
    // @Header('Cache-Control', 'none')    // 自定义响应头
    async findAll(@Req() request: Request, @Res({ passthrough: true }) res: Response): Promise<Cat[]> {
        console.log('findall')
        return this.catsService.findAll()
    }

    @Get(':id') // 路由参数
    findOne(@Param() params: any) {
        console.log(params)
        return `This action returns a #${params.id} cat`;
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }
}