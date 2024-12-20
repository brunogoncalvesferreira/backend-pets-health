import { PrismaAppointmentsRepository } from '../../repositories/prisma/prisma-appointments-repository'
import { CreateAppointmentsUseCase } from '../create-appointments-use-case'

export function makeCreateAppointments() {
	const createAppointmentsRepository = new PrismaAppointmentsRepository()
	const createAppointmentsUseCase = new CreateAppointmentsUseCase(
		createAppointmentsRepository,
	)

	return createAppointmentsUseCase
}
