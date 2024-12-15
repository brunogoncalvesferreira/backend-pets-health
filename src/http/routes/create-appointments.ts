import type { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../../lib/prisma'

const SchemaRequestBody = z.object({
	date: z.coerce.date(),
	reason: z.string(),
	nameVet: z.string(),
	contactVet: z.string(),
	petsId: z.string(),
})

export function createAppointments(app: FastifyInstance) {
	app.post('/appointments', async (request, reply) => {
		try {
			const { date, reason, nameVet, contactVet, petsId } =
				SchemaRequestBody.parse(request.body)

			await prisma.appointments.create({
				data: { date, reason, nameVet, contactVet, petsId },
			})

			return reply
				.status(201)
				.send({ message: 'Consulta agendada com sucesso!' })
		} catch (error) {
			console.log(error)
		}
	})
}
