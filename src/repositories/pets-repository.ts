import type { Prisma, Pets } from '@prisma/client'

export interface PetsRepository {
	createPet(data: Prisma.PetsCreateInput): Promise<Pets>
}
