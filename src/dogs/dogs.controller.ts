import { Controller, Get, Header, HttpCode, Post, Query, Redirect, Res } from '@nestjs/common';
import { response } from 'express';
import { version } from 'os';

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
    // default status-code is 302 (Found)
    @Redirect('https://nestjs.com', 301)
    findAllRoutes() {
        return 'This route uses a wildcard';
    }

    // Redirection
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' }
        }
    }

}
