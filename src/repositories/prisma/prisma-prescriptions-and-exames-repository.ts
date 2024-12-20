import type { Prisma, PrescriptionsExams } from '@prisma/client'
import type { PrescriptionsAndExamsRepository } from '../prescriptions-and-exams-repository'
import { prisma } from '../../lib/prisma'

export class PrismaPrescriptionsAndExamsRepository
	implements PrescriptionsAndExamsRepository
{
	async createPrescriptionsAndExams(
		data: Prisma.PrescriptionsExamsCreateInput,
	) {
		const prescriptionsAndExams = await prisma.prescriptionsExams.create({
			data,
		})

		return prescriptionsAndExams
	}

	async listById(petsId: string): Promise<PrescriptionsExams[] | null> {
		const prescriptionsAndExams = await prisma.prescriptionsExams.findMany({
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

		return prescriptionsAndExams
	}
}
