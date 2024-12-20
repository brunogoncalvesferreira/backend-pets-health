import type { Prisma, Vaccine } from '@prisma/client'

export interface VaccineRepository {
	createVaccine(data: Prisma.VaccineCreateInput): Promise<Vaccine>
	listById(petsId: string): Promise<Vaccine[] | null>
}
