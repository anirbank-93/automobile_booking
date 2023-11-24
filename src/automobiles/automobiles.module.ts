import { Module } from '@nestjs/common';
import { AutomobileSeederService } from './services/seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { AutomobileEntity } from './models/automobile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutomobileEntity])],
  providers: [AutomobileSeederService]
})
export class AutomobilesModule {}
