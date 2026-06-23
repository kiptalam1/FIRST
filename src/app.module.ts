import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import { DogsService } from './dogs/dogs.service';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './dogs/logger.middleware';

@Module({
    imports: [CatsModule, DogsModule],
    controllers: [AppController, DogsController, CatsController],
    providers: [AppService, DogsService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
            .exclude({
                path: 'dogs', method: RequestMethod.POST
            },
                'dogs/{*splat}',
            )
            .forRoutes({ path: 'dogs', method: RequestMethod.GET });
    }
}
