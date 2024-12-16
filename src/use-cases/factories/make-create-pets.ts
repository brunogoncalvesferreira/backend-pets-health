import { PrismaPetsRepository } from '../../repositories/prisma/prisma-pets-repository'
import { CreatePetUseCase } from '../create-pets'

export function makeCreatePets() {
	const createPetsRepository = new PrismaPetsRepository()
	const createPetsUseCase = new CreatePetUseCase(createPetsRepository)

	return createPetsUseCase
}
