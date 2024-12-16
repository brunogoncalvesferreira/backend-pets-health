import type { Prisma, Tutor, Pets } from '@prisma/client'

export interface TutorRepository {
	createTutor(data: Prisma.TutorCreateInput): Promise<Tutor>
	findByEmail(email: string): Promise<Tutor | null>
}
