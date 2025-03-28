import { Company } from "src/companies/entities/company.entity"

export class Product {
    id:number
    nombre:string
    descripcion:string
    precio:number
    status:boolean
    companyId:number
    company:Company
}
