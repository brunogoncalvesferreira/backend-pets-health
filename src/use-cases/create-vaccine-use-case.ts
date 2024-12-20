import type { Prisma, Vaccine } from '@prisma/client'
import type { VaccineRepository } from '../repositories/vaccine-repository'

interface CreateVaccineUseCaseRequest {
	name: string
	lot: string
	applicationDate: Date | string
	expirationDate: Date | string
	petsId: string
}

interface CreateVaccineUseCaseResponse {
	vaccine: Vaccine
}

export class CreateVaccineUseCase {
	constructor(private vaccineRepository: VaccineRepository) {}

	async execute({
		name,
		lot,
		applicationDate,
		expirationDate,
		petsId,
	}: CreateVaccineUseCaseRequest): Promise<CreateVaccineUseCaseResponse> {
		const vaccine = await this.vaccineRepository.createVaccine({
			name,
			lot,
			applicationDate,
			expirationDate,
			Pets: {
				connect: {
					id: petsId,
				},
			},
		})

		return {
			vaccine,
		}
	}
}
