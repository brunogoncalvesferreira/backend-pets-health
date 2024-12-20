import type { FastifyInstance } from 'fastify'

import z from 'zod'
import { makeGetPrescriptionsAndExams } from '../../use-cases/factories/make-get-prescriptions-and-exams'

const SchemaRequestParams = z.object({
	petsId: z.string().uuid(),
})

export async function getPrescriptoinsAndExams(app: FastifyInstance) {
	app.get('/prescriptions-and-exams/:petsId', async (request, _) => {
		try {
			const { petsId } = SchemaRequestParams.parse(request.params)

			const getPrescriptionsAndExams = makeGetPrescriptionsAndExams()

			const prescriptionsAndExams =
				await getPrescriptionsAndExams.execute(petsId)

			return prescriptionsAndExams
		} catch (error) {
			console.log(error as Error)
		}
	})
}
