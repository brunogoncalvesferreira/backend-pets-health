import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getAppointments(app: FastifyInstance) {
	app.get('/appointments/:petsId', async (request, reply) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

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
					date: 'desc',
				},
			})

			return appointments
		} catch (error) {
			console.log(error as Error)
		}
	})
}
