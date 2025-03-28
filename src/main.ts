import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './services/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  /* const seeder = app.get(SeederService);
  await seeder.importCitiesAndDepartments(); */
}
bootstrap();
