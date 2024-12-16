import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

import z from 'zod'

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

			await prisma.prescriptionsExams.create({
				data: { descriptionPrescriptons, descriptionExams, date, petsId },
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
