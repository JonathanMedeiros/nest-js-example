import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { EventService } from 'src/modules/event/services';
import { Event } from 'src/shared/interfaces';

@Controller('events')
export class EventController {
    constructor(
        private readonly eventService: EventService
    ) {}

    @Get()
    all(@Res() res: Response): Response<Event[]> {
        const data = this.eventService.findAll();
        return res.status(HttpStatus.OK).json(data);
    }

    @Get(':id')
    find(@Param('id') id: string): Event {
        return this.eventService.findOne(id);
    }
}
