import { Module } from '@nestjs/common';
import { EventController } from './controllers';
import { EventService } from './services';

@Module({
    controllers: [
        EventController
    ],
    providers: [
        EventService
    ],
})

export class EventModule {}
