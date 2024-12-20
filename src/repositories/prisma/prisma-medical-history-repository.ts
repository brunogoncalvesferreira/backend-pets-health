import { prisma } from '../../lib/prisma'

import type { Prisma, MedicalHistory } from '@prisma/client'
import type { MedicalHistoryRepository } from '../medical-history-repository'

export class PrismaMedicalHistoryRepository
	implements MedicalHistoryRepository
{
	async createMedicalHistory(
		data: Prisma.MedicalHistoryCreateInput,
	): Promise<MedicalHistory> {
		const medicalHistory = await prisma.medicalHistory.create({
			data,
		})

		return medicalHistory
	}

	async listById(petsId: string): Promise<MedicalHistory[] | null> {
		const medicalHistory = await prisma.medicalHistory.findMany({
			where: {
				petsId,
			},

			include: {
				Pets: {
					include: {
						Tutor: true,
					},
				},
			},

			orderBy: {
				createdAt: 'desc',
			},
		})

		return medicalHistory
	}
}
