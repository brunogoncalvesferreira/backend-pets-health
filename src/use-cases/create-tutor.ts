import type { TutorRepository } from '../repositories/tutor-repository'
import type { Tutor } from '@prisma/client'

import { hash } from 'bcryptjs'

interface CreateTutorUseCaseRequest {
	name: string
	email: string
	password: string
}

interface CreateTutorUseCaseResponse {
	tutor: Tutor
}

export class CreateTutorAndPetsUseCase {
	constructor(private tutorRepository: TutorRepository) {}

	async execute({
		name,
		email,
		password,
	}: CreateTutorUseCaseRequest): Promise<CreateTutorUseCaseResponse> {
		const passwordHash = await hash(password, 6)

		const tutorWithSameEmail = await this.tutorRepository.findByEmail(email)

		if (tutorWithSameEmail) {
			throw new Error('E-mail já cadastrado. Tente novamente.')
		}

		const tutor = await this.tutorRepository.createTutor({
			name,
			email,
			password: passwordHash,
		})

		return {
			tutor: tutor,
		}
	}
}
