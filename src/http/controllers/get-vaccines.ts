import type { FastifyInstance } from 'fastify'
import z from 'zod'
import { makeGetVaccine } from '../../use-cases/factories/make-get-vaccine'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getVaccines(app: FastifyInstance) {
	app.get('/vaccines/:petsId', async (request, _) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const getVaccines = makeGetVaccine()

			const vaccines = await getVaccines.execute(petsId)

			return vaccines
		} catch (error) {
			console.log(error as Error)
		}
	})
}
