import { PrismaGetAppointmentsRepository } from "../../repositories/prisma/prisma-get-appointments-repository";
import { GetAppointmentsUseCase } from "../get-appointments-use-case";

export function makeGetAppointments() {
  const getAppointmentsRepository = new PrismaGetAppointmentsRepository()
  const getAppointmentsUseCase = new GetAppointmentsUseCase(getAppointmentsRepository)

  return getAppointmentsUseCase
}