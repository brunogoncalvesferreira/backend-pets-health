import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

import z from 'zod'

const SchemarequestBody = z.object({
	name: z.string(),
	description: z.string(),
	diagnosticDate: z.coerce.date(),
	petsId: z.string(),
})

export async function createMedicalHistory(app: FastifyInstance) {
	app.post('/medical-history', async (request, reply) => {
		try {
			const { name, description, diagnosticDate, petsId } =
				SchemarequestBody.parse(request.body)

			await prisma.medicalHistory.create({
				data: { name, description, diagnosticDate, petsId },
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
