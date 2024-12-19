import { PrismaMedicalHistoryRepository } from "../../repositories/prisma/prisma-medical-history-repository";
import { CreateMedicalHistoryUseCase } from "../create-medical-history-use-case";

export function makeCreateMedicalHistory() {
  const createMedicalHistoryRepository = new PrismaMedicalHistoryRepository()
  const createMedicalHistoryUseCase = new CreateMedicalHistoryUseCase(createMedicalHistoryRepository)

  return createMedicalHistoryUseCase
}