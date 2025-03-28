import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';
import { CitiesModule } from './cities/cities.module';
import { DepartmentsModule } from './departments/departments.module';
import { PrismaService } from './database/prisma.service';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [UsersModule, CompaniesModule, ProductsModule, CitiesModule, DepartmentsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
