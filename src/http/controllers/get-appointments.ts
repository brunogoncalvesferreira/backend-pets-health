import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'
import { makeGetAppointments } from '../../use-cases/factories/make-get-appointments'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getAppointments(app: FastifyInstance) {
	app.get('/appointments/:petsId', async (request, reply) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const getAppointments = makeGetAppointments()

			const appointments = await getAppointments.execute(petsId)

			return appointments
			
		} catch (error) {
			console.log(error as Error)
		}
	})
}
