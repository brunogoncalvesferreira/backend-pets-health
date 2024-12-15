import 'dotenv/config'

import fastify from 'fastify'

import cors from '@fastify/cors'

import cookie from '@fastify/cookie'
import type { FastifyCookieOptions } from '@fastify/cookie'
import { env } from '../env'
import { createTutor } from './routes/create-tutor'
import { createAppointments } from './routes/create-appointments'
import { getAppointments } from './routes/get-appointments'
import { createVaccine } from './routes/create-vaccine'
import { getVaccines } from './routes/get-vaccines'

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
