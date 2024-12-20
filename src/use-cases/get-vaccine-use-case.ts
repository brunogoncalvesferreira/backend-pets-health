import type { Vaccine } from '@prisma/client'
import type { VaccineRepository } from '../repositories/vaccine-repository'

export class GetVaccineUseCase {
	constructor(private getVaccineRepository: VaccineRepository) {}

	async execute(petsId: string): Promise<Vaccine[] | null> {
		const vaccines = await this.getVaccineRepository.listById(petsId)

		return vaccines
	}
}
