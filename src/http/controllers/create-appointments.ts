import type { FastifyInstance } from 'fastify'
import z from 'zod'

import { makeCreateAppointments } from '../../use-cases/factories/make-create-appointments'

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

			const createAppointments = makeCreateAppointments()

			await createAppointments.execute({
				date,
				reason,
				nameVet,
				contactVet,
				petsId,
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
