import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getMedicalHistory(app: FastifyInstance) {
	app.get('/medical-history/:petsId', async (request, reply) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const medicalHistory = await prisma.medicalHistory.findMany({
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

			return medicalHistory
		} catch (error) {
			console.log(error as Error)
		}
	})
}
