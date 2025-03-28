import { Company } from "src/companies/entities/company.entity"
import { Department } from "src/departments/entities/department.entity"

export class City {
    id:number
    nombre:string
    departamentoId:string
    departamento: Department
    empresas: Company[]
}
