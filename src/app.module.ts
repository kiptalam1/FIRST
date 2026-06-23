import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import { DogsService } from './dogs/dogs.service';

@Module({
    imports: [CatsModule],
    controllers: [AppController, DogsController, CatsController],
    providers: [AppService, DogsService],
})
export class AppModule { }
