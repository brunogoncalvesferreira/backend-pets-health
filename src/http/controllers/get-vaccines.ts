import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getVaccines(app: FastifyInstance) {
	app.get('/vaccines/:petsId', async (request, reply) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const vaccines = await prisma.vaccine.findMany({
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

			return vaccines
		} catch (error) {
			console.log(error as Error)
		}
	})
}
