import type { FastifyInstance } from 'fastify'

import z from 'zod'

import { hash } from 'bcryptjs'
import { makeCreateTutor } from '../../use-cases/factories/make-create-tutor'
import { makeCreatePets } from '../../use-cases/factories/make-create-pets'

const SchemaRequestBody = z.object({
	name: z.string(),
	email: z.string(),
	password: z.string(),

	petName: z.string(),
	specie: z.string(),
	breed: z.string(),
	age: z.string(),
})

export async function createTutor(app: FastifyInstance) {
	app.post('/tutors', async (request, reply) => {
		try {
			const { name, email, password, petName, specie, breed, age } =
				SchemaRequestBody.parse(request.body)

			const createTutor = makeCreateTutor()
			const createPet = makeCreatePets()

			const tutor = await createTutor.execute({
				name,
				email,
				password,
			})

			await createPet.execute({
				petName,
				specie,
				breed,
				age,
				tutorId: tutor.tutor.id,
			})

			return reply.status(201).send()
		} catch (error) {
			console.log(error)
		}
	})
}
