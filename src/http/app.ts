import 'dotenv/config'

import fastify from 'fastify'

import cors from '@fastify/cors'

import cookie from '@fastify/cookie'
import type { FastifyCookieOptions } from '@fastify/cookie'
import { env } from '../env'
import { createTutor } from './controllers/create-tutor'
import { createAppointments } from './controllers/create-appointments'
import { getAppointments } from './controllers/get-appointments'
import { createVaccine } from './controllers/create-vaccine'
import { getVaccines } from './controllers/get-vaccines'
import { createMedicalHistory } from './controllers/create-medical-history'
import { getMedicalHistory } from './controllers/get-medical-history'
import { createPrescriptionsAndExams } from './controllers/create-prescriptions-and-exams'
import { getPrescriptoinsAndExams } from './controllers/get-prescriptoins-and-exams'

export const app = fastify()

app.register(cors, {
	origin: '*',
})

app.register(cookie, {
	secret: env.JWT_SECRET_KEY,
	parseOptions: {
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
		maxAge: 24 * 60 * 60 * 1000, // 1 day
	},
} as FastifyCookieOptions)

app.register(createTutor)
app.register(createAppointments)
app.register(getAppointments)
app.register(createVaccine)
app.register(getVaccines)
app.register(createMedicalHistory)
app.register(getMedicalHistory)
app.register(createPrescriptionsAndExams)
app.register(getPrescriptoinsAndExams)
