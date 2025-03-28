import { Company } from "src/companies/entities/company.entity"

export class User {
    id:number
    nombre: string
    email:string
    password:string
    status: boolean
    companyId: number
    company: Company
}
