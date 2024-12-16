import { PrismaTutorRepository } from '../../repositories/prisma/prisma-tutor-repository'
import { CreateTutorUseCase } from '../create-tutor-use-case'

export function makeCreateTutor() {
	const createTutorRepository = new PrismaTutorRepository()
	const createTutorUseCase = new CreateTutorUseCase(createTutorRepository)

	return createTutorUseCase
}
