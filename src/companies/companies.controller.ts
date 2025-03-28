import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/services/s3.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('companies')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly s3Service: S3Service
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('logoUrl'))
  async createCompany(
    @Body() companyData: CreateCompanyDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = file ? await this.s3Service.uploadFile(file, 'companies') : null;
    companyData.logoUrl = imageUrl ? imageUrl:'no logo';

    return await this.companiesService.create(companyData);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
