import { IsNotEmpty, IsString } from "class-validator";
import { Company } from "src/companies/entities/company.entity";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    nombre:string
    
    @IsString()
    @IsNotEmpty()
    descripcion:string

    @IsNotEmpty()
    precio:number

    status = true

    @IsNotEmpty()
    companyId:number
}
