import { City } from "src/cities/entities/city.entity"
import { Department } from "src/departments/entities/department.entity"
import { Product } from "src/products/entities/product.entity"
import { User } from "src/users/entities/user.entity"

export class Company {
    id:number
    nombre:string
    direccion:string
    ciudadId:number
    ciudad:City
    usuarios:User[]
    productos:Product[]
    status:string
    logoUrl?: string
}
