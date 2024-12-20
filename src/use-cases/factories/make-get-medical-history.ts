import { PrismaMedicalHistoryRepository } from '../../repositories/prisma/prisma-medical-history-repository'
import { GetMedicalHistoryUseCase } from '../get-medical-history-use-case'

export function makeGetMedicalHistory() {
	const getMedicalHistoryRepository = new PrismaMedicalHistoryRepository()
	const getMedicalHistoryUseCase = new GetMedicalHistoryUseCase(
		getMedicalHistoryRepository,
	)

	return getMedicalHistoryUseCase
}
