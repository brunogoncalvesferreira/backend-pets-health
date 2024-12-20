import type { MedicalHistory } from '@prisma/client'
import type { MedicalHistoryRepository } from '../repositories/medical-history-repository'

interface CreateMedicalHistoryUseCaseRequest {
	name: string
	description: string
	diagnosticDate: Date
	petsId: string
}

interface CreateMedicalHistoryUseCaseResponse {
	medicalHistory: MedicalHistory
}

export class CreateMedicalHistoryUseCase {
	constructor(private medicalHistoryRepository: MedicalHistoryRepository) {}

	async execute({
		name,
		petsId,
		description,
		diagnosticDate,
	}: CreateMedicalHistoryUseCaseRequest): Promise<CreateMedicalHistoryUseCaseResponse> {
		const medicalHistory =
			await this.medicalHistoryRepository.createMedicalHistory({
				name,
				description,
				diagnosticDate,
				Pets: {
					connect: {
						id: petsId,
					},
				},
			})

		return {
			medicalHistory,
		}
	}
}
