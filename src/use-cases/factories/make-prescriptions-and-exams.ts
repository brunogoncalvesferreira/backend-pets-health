import { PrismaPrescriptionsAndExamsRepository } from '../../repositories/prisma/prisma-prescriptions-and-exames-repository'
import { CreatePrescriptionsAndExamsUseCase } from '../create-prescriptions-and-exams-use-case'

export function makeCreatePrescriptionsAndExams() {
	const createPrescriptionsAndExamsRepository =
		new PrismaPrescriptionsAndExamsRepository()

	const createPrescriptionsAndExamsUseCase =
		new CreatePrescriptionsAndExamsUseCase(
			createPrescriptionsAndExamsRepository,
		)

	return createPrescriptionsAndExamsUseCase
}
