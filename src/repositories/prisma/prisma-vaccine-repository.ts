import type { Prisma, Vaccine } from '@prisma/client'
import type { VaccineRepository } from '../vaccine-repository'
import { prisma } from '../../lib/prisma'

export class PrismaVaccineRepository implements VaccineRepository {
	async createVaccine(data: Prisma.VaccineCreateInput): Promise<Vaccine> {
		const vaccine = await prisma.vaccine.create({
			data,
		})

		return vaccine
	}

	async listById(petsId: string): Promise<Vaccine[] | null> {
		const vaccines = await prisma.vaccine.findMany({
			where: { petsId },
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

		return vaccines
	}
}
