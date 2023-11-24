import { Controller, Post, Body } from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.interface';

@Controller('booking')
export class BookingsController {
    constructor(private BookingService: BookingsService) {}

    @Post()
    async create(@Body() bookingData: Booking): Promise<Booking> {
        let model = await this.BookingService.findOneBooking(bookingData.vehicleModel)
        console.log(model);

        if (!model) {
             return this.BookingService.createBooking(bookingData);
        } else {
            return model;
        }
    }
}
