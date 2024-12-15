import type { FastifyInstance } from 'fastify'

import { prisma } from '../../lib/prisma'

import z from 'zod'

import { hash } from 'bcryptjs'

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

			const tutorWithSameEmail = await prisma.tutor.findUnique({
				where: {
					email,
				},
			})

			if (tutorWithSameEmail) {
				throw new Error('E-mail já cadastradoa. Tente novamente.')
			}

			const passwordHash = await hash(password, 6)

			const tutors = await prisma.tutor.create({
				data: { name, email, password: passwordHash },
			})

			await prisma.pets.create({
				data: {
					name: petName,
					specie,
					breed,
					age,
					tutorId: tutors.id,
				},
			})

			return reply.status(201).send({ massage: 'Pet criado com sucesso!' })
		} catch (error) {
			console.log(error)
		}
	})
}
