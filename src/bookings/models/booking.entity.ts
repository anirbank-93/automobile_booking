import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

@Entity('bookings')
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  wheelNumber: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  vehicleModel: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  bookingStartDate: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  bookingEndDate: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
