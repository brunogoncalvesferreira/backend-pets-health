import { Appointments} from '@prisma/client'

export interface GetAppointmentsRepository {
  listById: (petsId: string) => Promise<Appointments | null>
}