import type { Prisma, MedicalHistory } from '@prisma/client'

export interface MedicalHistoryRepository {
	createMedicalHistory(
		data: Prisma.MedicalHistoryCreateInput,
	): Promise<MedicalHistory>
	listById: (petsId: string) => Promise<MedicalHistory[] | null>
}
