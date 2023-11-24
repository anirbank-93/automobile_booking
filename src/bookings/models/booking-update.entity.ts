import { PartialType } from '@nestjs/mapped-types';
import { BookingEntity } from './booking.entity';

export class BookingEntityUpdate extends PartialType(BookingEntity) {}
