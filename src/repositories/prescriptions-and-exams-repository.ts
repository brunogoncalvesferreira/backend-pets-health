import type { PrescriptionsExams, Prisma } from '@prisma/client'

export interface PrescriptionsAndExamsRepository {
	createPrescriptionsAndExams(
		data: Prisma.PrescriptionsExamsCreateInput,
	): Promise<PrescriptionsExams>

	listById(petsId: string): Promise<PrescriptionsExams[] | null>
}
