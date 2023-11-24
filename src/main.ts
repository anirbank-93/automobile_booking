import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AutomobileSeederService } from './automobiles/services/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const seedService = app.get(AutomobileSeederService);
  await seedService.seedData();
  
  await app.listen(3000);
}
bootstrap();
