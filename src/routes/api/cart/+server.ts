import { auth } from '$lib/server/auth'
import { db } from '$lib/server/db'
import { cartItem } from '$lib/server/db/schema'
import { json } from '@sveltejs/kit'
import { eq } from 'drizzle-orm'

export async function GET({ request }) {
  const session = await auth.api.getSession({ headers: request.headers })
  if (!session)
    return json({ count: 0, items: [] })

  const items = await db.query.cartItem.findMany({
    where: eq(cartItem.userId, session.user.id),
  })

  return json({ count: items.length, items })
}

export async function POST({ request }) {
  const session = await auth.api.getSession({ headers: request.headers })
  if (!session)
    return json({ error: 'Unauthorized' }, { status: 401 })

  const { label } = await request.json()

  await db.insert(cartItem).values({
    id: crypto.randomUUID(),
    userId: session.user.id,
    label,
    createdAt: new Date(),
  })

  const items = await db.query.cartItem.findMany({
    where: eq(cartItem.userId, session.user.id),
  })

  return json({ count: items.length, items })
}

export async function DELETE({ request }) {
  const session = await auth.api.getSession({ headers: request.headers })
  if (!session)
    return json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()
    if (body.id) {
      await db.delete(cartItem).where(eq(cartItem.id, body.id))
    }
    else {
      await db.delete(cartItem).where(eq(cartItem.userId, session.user.id))
    }
  }
  catch {
    // Fallback for empty body (clear all)
    await db.delete(cartItem).where(eq(cartItem.userId, session.user.id))
  }

  return json({ count: 0, items: [] })
}
