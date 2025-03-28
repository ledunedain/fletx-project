import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.importCitiesAndDepartments();
  }

  async importCitiesAndDepartments() {
    // Leer el archivo JSON
    const rawData = fs.readFileSync('colombia.json', 'utf8');
    const colombiaData = JSON.parse(rawData);

    for (const department of colombiaData) {
      // Insertar el departamento
      const createdDepartment = await this.prisma.department.upsert({
        where: { nombre: department.departamento },
        update: {},
        create: { nombre: department.departamento },
      });

      for (const city of department.ciudades) {
        await this.prisma.city.upsert({
          where: { nombre: city },
          update: {},
          create: {
            nombre: city,
            departamentoId: createdDepartment.id,
          },
        });
      }
    }

    console.log('✅ Importación completada.');
  }
}
