import type { PrescriptionsAndExamsRepository } from '../repositories/prescriptions-and-exams-repository'
import type { PrescriptionsExams } from '@prisma/client'

interface CreatePrescriptionsAndExamsUseCaseRequest {
	descriptionPrescriptons: string
	descriptionExams: string
	date: Date
	petsId: string
}

interface CreatePrescriptionsAndExamsUseCaseResponse {
	prescriptionsAndExams: PrescriptionsExams
}

export class CreatePrescriptionsAndExamsUseCase {
	constructor(
		private createPrescriptionsAndExamsRepository: PrescriptionsAndExamsRepository,
	) {}

	async execute({
		descriptionPrescriptons,
		descriptionExams,
		date,
		petsId,
	}: CreatePrescriptionsAndExamsUseCaseRequest): Promise<CreatePrescriptionsAndExamsUseCaseResponse> {
		const prescriptionsAndExams =
			await this.createPrescriptionsAndExamsRepository.createPrescriptionsAndExams(
				{
					descriptionPrescriptons,
					descriptionExams,
					date,
					Pets: {
						connect: {
							id: petsId,
						},
					},
				},
			)

		return {
			prescriptionsAndExams,
		}
	}
}
