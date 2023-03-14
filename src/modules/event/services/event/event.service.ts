import { Injectable } from '@nestjs/common';
import { Event } from 'src/shared/interfaces';

@Injectable()
export class EventService {
    findAll(): Event[] {
        return [
            {
                id: '1231',
                title: 'Teste1',
                startDate: '2023-03-13',
            },
            {
                id: '1232',
                title: 'Teste2',
                startDate: '2023-03-13',
            },
            {
                id: '1233',
                title: 'Teste3',
                startDate: '2023-03-13',
            },
            {
                id: '1234',
                title: 'Teste4',
                startDate: '2023-03-13',
            },
        ];
    }

    findOne(eventId: string): Event{
        const events = this.findAll();
        return events.find((event) => event.id == eventId );
    }
}
