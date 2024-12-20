import { PrismaVaccineRepository } from '../../repositories/prisma/prisma-vaccine-repository'
import { GetVaccineUseCase } from '../get-vaccine-use-case'

export function makeGetVaccine() {
	const getVaccineRepository = new PrismaVaccineRepository()
	const getVaccineUseCase = new GetVaccineUseCase(getVaccineRepository)

	return getVaccineUseCase
}
