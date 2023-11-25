import { Controller, Post, Body, HttpStatus, Response } from '@nestjs/common';
import { BookingsService } from '../services/bookings.service';
import { Booking } from '../models/booking.interface';

@Controller('booking')
export class BookingsController {
    constructor(private BookingService: BookingsService) {}

    @Post()
    async create(@Body() bookingData: Booking, @Response() res): Promise<any> {
        let model = await this.BookingService.findOneBooking(bookingData.vehicleModel)
        console.log("check booking", model);

        if (!model) {
             let newBooking = this.BookingService.createBooking(bookingData);

             return res.status(HttpStatus.CREATED).json({
                status: true,
                message: "New booking created.",
                data: newBooking
             })
        } else {
            return res.status(HttpStatus.FORBIDDEN).json({
                status: false,
                message: "This vehicle is not available."
            });
        }
    }
}
