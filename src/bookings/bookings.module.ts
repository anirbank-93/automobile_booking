import { Module } from '@nestjs/common';
import { BookingsService } from './services/bookings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { BookingEntity } from './models/booking.entity';
import { BookingsController } from './controllers/bookings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  providers: [BookingsService],
  controllers: [BookingsController],
})
export class BookingsModule {}
