import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from '@auth/sveltekit/providers/github'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '$lib/server/db/db'

export const { handle } = SvelteKitAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
})
