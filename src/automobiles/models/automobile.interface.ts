export interface Automobile {
    id?: number;
    wheelNumber?: number;
    modelName?: string;
    variant?: string;
    transmission?: string;
    mileage?: string;
    mileageUnit?: string;
    engine?: number;
    engineUnit?: string;
    kerbWeight?: number;
    kerbWeightUnit?: string;
    fuelTankCapacity?: number;
    fuelTankCapacityUnit?: string;
    seatHeight: number;
    seatHeightUnit: string;
    safetyRating?: string;
    safetyRatingAgency?: string;
    fuelType?: string;
    seatingCapacity?: string;
    noOfAvailability?: number;
    createdAt?: Date;
    updatedAt?: Date;
}