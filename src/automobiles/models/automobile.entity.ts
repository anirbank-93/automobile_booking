import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

@Entity('automobiles')
export class AutomobileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    wheelNumber: number;

    @Column()
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    modelName: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    variant: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    transmission: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    mileage: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    mileageUnit: string;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    engine: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    engineUnit: string;

    @Column({ default: 0 })
    kerbWeight: number;

    @Column({ default: '' })
    kerbWeightUnit: string;

    @Column({ default: 0 })
    fuelTankCapacity: number;

    @Column({ default: '' })
    fuelTankCapacityUnit: string;

    @Column({ default: 0 })
    seatHeight: number;

    @Column({ default: '' })
    seatHeightUnit: string;

    @Column({ default: '' })
    safetyRating: string

    @Column({ default: '' })
    safetyRatingAgency: string

    @Column({ default: '' })
    fuelType: string

    @Column()
    @IsString()
    @IsNotEmpty()
    seatingCapacity: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}