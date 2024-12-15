import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

import z from 'zod'

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

			await prisma.vaccine.create({
				data: { name, lot, applicationDate, expirationDate, petsId },
			})

			return reply.status(201).send({ message: 'Vacina cadastrada!' })
		} catch (error) {
			console.log(error)
		}
	})
}
