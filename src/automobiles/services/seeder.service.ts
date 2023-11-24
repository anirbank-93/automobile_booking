import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutomobileEntity } from '../models/automobile.entity';

@Injectable()
export class AutomobileSeederService {
  constructor(
    @InjectRepository(AutomobileEntity)
    private readonly automobileRepository: Repository<AutomobileEntity>,
  ) {}

  async seedData(): Promise<void> {
    const automobile1 = this.automobileRepository.create({
      id: 1,
      wheelNumber: 4,
      modelName: 'Tata Harrier',
      variant: 'Pure',
      transmission: 'Manual & Automatic',
      mileage: '14.6 to 16.8',
      mileageUnit: "[{IN: 'kmpl'}]",
      engine: 1956,
      engineUnit: "[{IN: 'cc'}]",
      //   kerbWeight: 0,
      //   kerbWeightUnit: "",
      //   fuelTankCapacity: 0,
      //   fuelTankCapacityUnit: "",
      //   seatHeight: 0,
      //   seatHeightUnit: "",
      safetyRating: '5 Star',
      safetyRatingAgency: 'Global (NCAP)',
      fuelType: 'Diesel',
      seatingCapacity: '5',
      noOfAvailability: 1,
    });

    const automobile2 = this.automobileRepository.create({
      id: 2,
      wheelNumber: 4,
      modelName: 'Toyota Innova Hycross',
      variant: 'GX Limited Edition 7 STR',
      transmission: 'Manual & Automatic',
      mileage: '16.13 to 23.24',
      mileageUnit: "[{IN: 'kmpl'}]",
      engine: 1987,
      engineUnit: "[{IN: 'cc'}]",
      //   kerbWeight: 0,
      //   kerbWeightUnit: "",
      //   fuelTankCapacity: 0,
      //   fuelTankCapacityUnit: "",
      //   seatHeight: 0,
      //   seatHeightUnit: "",
      //   safetyRating: '5 Star',
      //   safetyRatingAgency: 'Global (NCAP)',
      fuelType: 'Petrol & Hybrid',
      seatingCapacity: '7 & 8',
      noOfAvailability: 1,
    });

    const automobile3 = this.automobileRepository.create({
      id: 3,
      wheelNumber: 4,
      modelName: 'Hyundai Verna',
      variant: 'SX 1.5 Petrol MT',
      transmission: 'Manual & Automatic',
      mileage: '18.6 to 20.6',
      mileageUnit: "[{IN: 'kmpl'}]",
      engine: 1482,
      engineUnit: "[{IN: 'cc'}]",
      //   kerbWeight: 0,
      //   kerbWeightUnit: "",
      //   fuelTankCapacity: 0,
      //   fuelTankCapacityUnit: "",
      //   seatHeight: 0,
      //   seatHeightUnit: "",
      safetyRating: '5 Star',
      safetyRatingAgency: 'Global (NCAP)',
      fuelType: 'Petrol',
      seatingCapacity: '5',
      noOfAvailability: 1,
    });

    const automobile4 = this.automobileRepository.create({
      id: 4,
      wheelNumber: 2,
      modelName: 'Royal Enfield Meteor 350',
      variant: 'Fireball',
      transmission: '5 Speed Manual',
      mileage: '32.6',
      mileageUnit: "[{IN: 'kmpl'}]",
      engine: 349,
      engineUnit: "[{IN: 'cc'}]",
      kerbWeight: 191,
      kerbWeightUnit: "[{IN: 'kg'}]",
      fuelTankCapacity: 15,
      fuelTankCapacityUnit: "[{IN: 'litres'}]",
      seatHeight: 765,
      seatHeightUnit: "[{IN: 'mm'}]",
      //   safetyRating: '5 Star',
      //   safetyRatingAgency: 'Global (NCAP)',
      //   fuelType: 'Petrol',
      seatingCapacity: '2',
      noOfAvailability: 1,
    });

    await this.automobileRepository.save(automobile1);
    await this.automobileRepository.save(automobile2);
    await this.automobileRepository.save(automobile3);
    await this.automobileRepository.save(automobile4);

    console.log('Seeded automobile1:', automobile1);
    console.log('Seeded automobile2:', automobile2);
    console.log('Seeded automobile3:', automobile3);
    console.log('Seeded automobile4:', automobile4);
  }
}
