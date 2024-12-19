import type { FastifyInstance } from 'fastify'

import z from 'zod'
import { makeCreateMedicalHistory } from '../../use-cases/factories/make-create-medical-history'

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

			const createMedicalHistory =  makeCreateMedicalHistory()

			await createMedicalHistory.execute({
				name,
				description,
				diagnosticDate,
				petsId
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
