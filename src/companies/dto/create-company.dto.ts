import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";

export class CreateCompanyDto {

    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsString()
    @IsNotEmpty()
    direccion:string

    @IsNotEmpty()
    @IsNumber()
    ciudadId:number

    @IsNotEmpty()
    usuarios: User[]

    @IsNotEmpty()
    productos: Product[]

    status = true

    @IsOptional()
    logoUrl?: string
}
