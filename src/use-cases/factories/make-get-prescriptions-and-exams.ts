import { PrismaPrescriptionsAndExamsRepository } from '../../repositories/prisma/prisma-prescriptions-and-exames-repository'
import { GetPrescriptionsAndExamsUseCase } from '../get-prescriptions-and-exams-use-case'

export function makeGetPrescriptionsAndExams() {
	const getPrescriptionsAndExamsRepository =
		new PrismaPrescriptionsAndExamsRepository()

	const getPrescriptionsAndExamsUseCase = new GetPrescriptionsAndExamsUseCase(
		getPrescriptionsAndExamsRepository,
	)

	return getPrescriptionsAndExamsUseCase
}
