import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as environment from '$env/static/private'

const dbUrl = environment.DATABASE_URL

if (!dbUrl) throw new Error('🔴 must provide db url')

const queryClient = postgres(dbUrl)

export const db = drizzle(queryClient)
