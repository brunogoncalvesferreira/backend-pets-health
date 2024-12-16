import { PrismaPetsRepository } from '../../repositories/prisma/prisma-pets-repository'
import { CreatePetsUseCase } from '../create-pets-use-case'

export function makeCreatePets() {
	const createPetsRepository = new PrismaPetsRepository()
	const createPetsUseCase = new CreatePetsUseCase(createPetsRepository)

	return createPetsUseCase
}
