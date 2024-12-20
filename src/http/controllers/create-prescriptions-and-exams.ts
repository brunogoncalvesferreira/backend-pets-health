import type { FastifyInstance } from 'fastify'

import z from 'zod'
import { makeCreatePrescriptionsAndExams } from '../../use-cases/factories/make-prescriptions-and-exams'

const SchemarequestBody = z.object({
	descriptionPrescriptons: z.string(),
	descriptionExams: z.string(),
	date: z.coerce.date(),
	petsId: z.string(),
})

export async function createPrescriptionsAndExams(app: FastifyInstance) {
	app.post('/prescriptions-and-exams', async (request, reply) => {
		try {
			const { descriptionPrescriptons, descriptionExams, date, petsId } =
				SchemarequestBody.parse(request.body)

			const createPrescriptionsAndExams = makeCreatePrescriptionsAndExams()

			await createPrescriptionsAndExams.execute({
				descriptionPrescriptons,
				descriptionExams,
				date,
				petsId,
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
