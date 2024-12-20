import type { FastifyInstance } from 'fastify'
import z from 'zod'
import { makeGetMedicalHistory } from '../../use-cases/factories/make-get-medical-history'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getMedicalHistory(app: FastifyInstance) {
	app.get('/medical-history/:petsId', async (request, _) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const getMedicalHistory = makeGetMedicalHistory()

			const medicalHistory = getMedicalHistory.execute(petsId)

			return medicalHistory
		} catch (error) {
			console.log(error as Error)
		}
	})
}
