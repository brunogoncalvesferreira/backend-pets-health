import { PrismaTutorRepository } from '../../repositories/prisma/prisma-tutor-repository'
import { CreateTutorAndPetsUseCase } from '../create-tutor'

export function makeCreateTutor() {
	const createTutorRepository = new PrismaTutorRepository()
	const createTutorUseCase = new CreateTutorAndPetsUseCase(
		createTutorRepository,
	)

	return createTutorUseCase
}
