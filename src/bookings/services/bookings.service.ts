import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from '../models/booking.entity';
import { Booking } from '../models/booking.interface';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(BookingEntity)
        private readonly bookingRepository: Repository<BookingEntity>
    ) {}

    createBooking(booking: Booking): Promise<Booking> {
        return this.bookingRepository.save(booking);
    }
}
