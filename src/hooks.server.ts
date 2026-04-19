import type { Handle } from '@sveltejs/kit'
import { building } from '$app/environment'
import { auth } from '$lib/server/auth'
import { redirect } from '@sveltejs/kit'
import { svelteKitHandler } from 'better-auth/svelte-kit'

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url

  // Use better-auth handler
  const response = await svelteKitHandler({
    event,
    resolve,
    auth,
    building,
  })

  // Get session from locals (Better Auth populates this if using the handler middleware version,
  // but in SvelteKit we might need to check more explicitly depending on version)
  // Actually, Better Auth SvelteKit handler should set the session in event.locals if configured.

  // Manual route protection
  const session = await auth.api.getSession({ headers: event.request.headers })

  if (pathname.startsWith('/dashboard') && !session) {
    throw redirect(302, '/login')
  }

  if ((pathname === '/login' || pathname === '/register') && session) {
    throw redirect(302, '/dashboard')
  }

  return response
}
