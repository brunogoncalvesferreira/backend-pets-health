import { prisma } from '../../lib/prisma'

import type { Prisma } from '@prisma/client'
import type { TutorRepository } from '../tutor-repository'

export class PrismaTutorRepository implements TutorRepository {
	async createTutor(data: Prisma.TutorCreateInput) {
		const tutorAndPet = await prisma.tutor.create({
			data,
		})

		return tutorAndPet
	}

	async createPet(data: Prisma.PetsCreateInput) {
		const pet = await prisma.pets.create({
			data,
		})

		return pet
	}

	async findByEmail(email: string) {
		const tutor = await prisma.tutor.findUnique({
			where: {
				email,
			},
		})

		return tutor
	}
}
