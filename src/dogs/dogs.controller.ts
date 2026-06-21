import { Controller, Get, Header, HttpCode, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('dogs')
export class DogsController {
    @Get(@Res() response: Response)
    findAll(): string {
        return 'This action returns all dogs';
    }
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'no-store')
    create(): string {
        return 'This action adds a new dog';
    }
    @Get('abdc/*')
    findAllRoutes() {
        return 'This rroute uses a wildcard';
    }
}
