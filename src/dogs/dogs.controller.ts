import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Res } from '@nestjs/common';
import { response } from 'express';
import { version } from 'os';
import { CreateDogDto } from './dto/create-dog.dto';

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

    // Route parameters
    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} dog`;
    }

    @Get(':id')
    findOneDog(@Param('id') id: string): string {
        return `This action returns a #${id} dog`;
    }

    // Request payloads
    @Post()
    async createDog(@Body() createDogDto: CreateDogDto) {
        console.log(createDogDto);
        return 'This action adds a new dog';
    }

    // Query parameters
    @Get()
    async findAllDogs(@Query('age') age: number, @Query('breed') breed: string) {
        return `This action returns all dogs filtered by age: ${age} and breed: ${breed}`
    }
}
