import { Module } from '@nestjs/common';
import { EventModule } from './modules/event/event.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    EventModule,
    AuthModule
  ]
})
export class AppModule {}
