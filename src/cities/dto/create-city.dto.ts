import { IsNotEmpty, IsString } from "class-validator";
import { Company } from "src/companies/entities/company.entity";

export class CreateCityDto {
    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsNotEmpty()
    departamento:number

    @IsNotEmpty()
    empresas: Company[]

}
