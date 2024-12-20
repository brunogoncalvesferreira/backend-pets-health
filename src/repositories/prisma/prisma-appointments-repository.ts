import { prisma } from '../../lib/prisma'
import type { Appointments } from '@prisma/client'

import type { GetAppointmentsRepository } from '../appointments-repository'

export class PrismaAppointmentsRepository implements GetAppointmentsRepository {
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
