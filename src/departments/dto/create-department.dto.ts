import { IsNotEmpty, IsString } from "class-validator";
import { City } from "src/cities/entities/city.entity";
import { Company } from "src/companies/entities/company.entity";

export class CreateDepartmentDto {

    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsNotEmpty()
    cities: City[]

    @IsNotEmpty()
    companies: Company[]
}
