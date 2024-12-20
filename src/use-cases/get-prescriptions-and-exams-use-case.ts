import type { PrescriptionsExams } from '@prisma/client'
import type { PrescriptionsAndExamsRepository } from '../repositories/prescriptions-and-exams-repository'

export class GetPrescriptionsAndExamsUseCase {
	constructor(
		private getPrescriptionsAndExamsRepository: PrescriptionsAndExamsRepository,
	) {}

	async execute(petsId: string): Promise<PrescriptionsExams[] | null> {
		return await this.getPrescriptionsAndExamsRepository.listById(petsId)
	}
}
