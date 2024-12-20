import type { Appointments, Prisma } from '@prisma/client'

export interface AppointmentsRepository {
	createAppointments(
		data: Prisma.AppointmentsCreateInput,
	): Promise<Appointments>

	listById: (petsId: string) => Promise<Appointments[] | null>
}
