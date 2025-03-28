import { City } from "src/cities/entities/city.entity"
import { Company } from "src/companies/entities/company.entity"

export class Department {
    id:number
    nombre:String
    ciudades:City[]
    empresas: Company[]
}
