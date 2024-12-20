import { PrismaVaccineRepository } from '../../repositories/prisma/prisma-vaccine-repository'
import { CreateVaccineUseCase } from '../create-vaccine-use-case'

export function makeCreateVaccine() {
	const createVaccineRepository = new PrismaVaccineRepository()
	const createVaccineUseCase = new CreateVaccineUseCase(createVaccineRepository)

	return createVaccineUseCase
}
