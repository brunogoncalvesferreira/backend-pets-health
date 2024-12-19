import { prisma } from "../../lib/prisma"
import { Appointments } from "@prisma/client"

import { GetAppointmentsRepository } from '../get-appointments-repository'

export class PrismaGetAppointmentsRepository implements GetAppointmentsRepository {
  async listById(petsId: string): Promise<Appointments | null> {
    
    const appointments = await prisma.appointments.findMany({
      where: {
        petsId,
      },
      include: {
        Pets: {
          include: {
            Tutor: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return appointments ? appointments[0] : null

  }
  
}