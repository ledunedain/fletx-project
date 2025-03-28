import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../database/prisma.service';
import { Company } from './entities/company.entity';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(data: CreateCompanyDto) {
    return await this.prisma.company.create({
      data: {
        nombre: data.nombre,
        direccion: data.direccion,
        ciudadId: Number(data.ciudadId),
        status: true
      },
    });
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.company.findUnique({
      where: { id },
      include: { ciudad: true },
    });
  }

  async update(id: number, data: UpdateCompanyDto) {
    return await this.prisma.company.update({
      where: { id },
      data: {
        nombre: data.nombre,
        direccion: data.direccion,
        ciudadId: Number(data.ciudadId),
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.company.update({
      where: { id },
      data:{
        status:false
      }
    });
  }
}
