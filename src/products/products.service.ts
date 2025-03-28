import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateProductDto) {
    return await this.prisma.product.create({
      data
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        companyId: data.companyId
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        status:false
      }
    });
  }
}
