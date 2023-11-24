import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from '../models/booking.entity';
import { Booking } from '../models/booking.interface';
import { BookingEntityUpdate } from '../models/booking-update.entity';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(BookingEntity)
        private readonly bookingRepository: Repository<BookingEntity>
    ) {}

    createBooking(booking: Booking): Promise<Booking> {
        return this.bookingRepository.save(booking);
    }

    findOneBooking(vehicleModel: string): Promise<Booking> {
        return this.bookingRepository.findOne({ where: { vehicleModel }})
    }

    async updateBooking(data: Object, vehicleModel: string): Promise<any> {
        const automobile = await this.bookingRepository.findOne({ where: { vehicleModel }})

        if (!automobile) {
            return new NotFoundException(`No vehicle called ${automobile.vehicleModel} found`);
        } else {
            return this.bookingRepository.update(automobile.id, data);
        }
    }
}
