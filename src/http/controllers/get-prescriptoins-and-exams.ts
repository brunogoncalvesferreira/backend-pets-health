import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getPrescriptoinsAndExams(app: FastifyInstance) {
	app.get('/prescriptions-and-exams/:petsId', async (request, reply) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const prescriptionsExams = await prisma.prescriptionsExams.findMany({
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

			return prescriptionsExams
		} catch (error) {
			console.log(error as Error)
		}
	})
}
