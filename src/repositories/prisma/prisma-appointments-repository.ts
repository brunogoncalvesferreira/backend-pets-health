import { prisma } from '../../lib/prisma'
import type { Appointments, Prisma } from '@prisma/client'

import type { AppointmentsRepository } from '../appointments-repository'

export class PrismaAppointmentsRepository implements AppointmentsRepository {
	async createAppointments(
		data: Prisma.AppointmentsCreateInput,
	): Promise<Appointments> {
		const appointments = await prisma.appointments.create({
			data,
		})

		return appointments
	}

	async listById(petsId: string): Promise<Appointments[] | null> {
		const appointments = await prisma.appointments.findMany({
			where: {
				petsId,
			},
			include: {
				Pets: {
					include: {
						Tutor: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		return appointments
	}
}
