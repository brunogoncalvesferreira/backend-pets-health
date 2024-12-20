import { PrismaAppointmentsRepository } from '../../repositories/prisma/prisma-appointments-repository'
import { GetAppointmentsUseCase } from '../get-appointments-use-case'

export function makeGetAppointments() {
	const getAppointmentsRepository = new PrismaAppointmentsRepository()
	const getAppointmentsUseCase = new GetAppointmentsUseCase(
		getAppointmentsRepository,
	)

	return getAppointmentsUseCase
}
