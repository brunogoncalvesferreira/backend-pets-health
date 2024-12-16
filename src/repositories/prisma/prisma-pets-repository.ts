import { prisma } from '../../lib/prisma'

import type { Prisma } from '@prisma/client'
import type { PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
	async createPet(data: Prisma.PetsCreateInput) {
		const pet = await prisma.pets.create({
			data,
		})

		return pet
	}
}
