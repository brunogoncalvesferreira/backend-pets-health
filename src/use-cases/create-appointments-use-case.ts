import type { Appointments } from '@prisma/client'
import type { AppointmentsRepository } from '../repositories/appointments-repository'

interface CreateAppointmentsUseCaseRequest {
	date: Date
	reason: string
	nameVet: string
	contactVet: string
	petsId: string
}

interface CreateAppointmentsUseCaseResponse {
	appointments: Appointments
}
export class CreateAppointmentsUseCase {
	constructor(private appointmentsRepository: AppointmentsRepository) {}

	async execute({
		reason,
		nameVet,
		contactVet,
		date,
		petsId,
	}: CreateAppointmentsUseCaseRequest): Promise<CreateAppointmentsUseCaseResponse> {
		const appointments = await this.appointmentsRepository.createAppointments({
			reason,
			nameVet,
			contactVet,
			date,
			Pets: {
				connect: {
					id: petsId,
				},
			},
		})

		return {
			appointments,
		}
	}
}
