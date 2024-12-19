import type { GetAppointmentsRepository } from '../repositories/get-appointments-repository'
import { Appointments } from '@prisma/client'

export class GetAppointmentsUseCase {
  constructor(private getAppointmentsRepository: GetAppointmentsRepository) {}

  async execute(petsId: string): Promise<Appointments | null> {
    return await this.getAppointmentsRepository.listById(petsId)
  }
}
