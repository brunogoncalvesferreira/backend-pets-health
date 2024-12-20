import type { FastifyInstance } from 'fastify'

import z from 'zod'
import { makeCreateVaccine } from '../../use-cases/factories/make-create-vaccine'

const SchemaRequestBody = z.object({
	name: z.string(),
	lot: z.string(),
	applicationDate: z.coerce.date(),
	expirationDate: z.coerce.date(),
	petsId: z.string(),
})

export async function createVaccine(app: FastifyInstance) {
	app.post('/vaccines', async (request, reply) => {
		try {
			const { name, lot, applicationDate, expirationDate, petsId } =
				SchemaRequestBody.parse(request.body)

			const createVaccine = makeCreateVaccine()

			await createVaccine.execute({
				name,
				lot,
				applicationDate,
				expirationDate,
				petsId,
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
