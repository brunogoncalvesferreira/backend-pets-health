import { Prisma, MedicalHistory } from '@prisma/client'

export interface MedicalHistoryRepository {
  createMedicalHistory(data: Prisma.MedicalHistoryCreateInput): Promise<MedicalHistory>
}