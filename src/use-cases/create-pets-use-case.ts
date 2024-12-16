import type { TutorRepository } from '../repositories/tutor-repository'
import type { PetsRepository } from '../repositories/pets-repository'
import type { Tutor, Pets } from '@prisma/client'

interface CreatePetUseCaseRequest {
	petName: string
	specie: string
	breed: string
	age: string
	tutorId: string
}

interface CreatePetUseCaseResponse {
	pet: Pets
}

export class CreatePetsUseCase {
	constructor(private petsRepository: PetsRepository) {}

	async execute({
		petName,
		specie,
		breed,
		age,
		tutorId,
	}: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
		const pet = await this.petsRepository.createPet({
			name: petName,
			specie,
			breed,
			age,
			Tutor: {
				connect: {
					id: tutorId,
				},
			},
		})

		return {
			pet: pet,
		}
	}
}
