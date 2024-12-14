import fastify from 'fastify'

import cors from '@fastify/cors'

import cookie from '@fastify/cookie'
import type { FastifyCookieOptions } from '@fastify/cookie'
import { env } from '../env'
import { createTutorRouter } from './routes/create-tutor-router'

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

app.register(createTutorRouter)
