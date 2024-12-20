import type { MedicalHistory } from '@prisma/client'
import type { MedicalHistoryRepository } from '../repositories/medical-history-repository'

export class GetMedicalHistoryUseCase {
	constructor(private getMedicalHistoryRepository: MedicalHistoryRepository) {}

	async execute(petsId: string): Promise<MedicalHistory[] | null> {
		return await this.getMedicalHistoryRepository.listById(petsId)
	}
}
