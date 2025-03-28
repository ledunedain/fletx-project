import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SeederService } from 'src/services/seeder.service';

@Module({
  providers: [PrismaService, /* SeederService */],
  exports: [PrismaService,/*  SeederService */],
})
export class PrismaModule {}
