import { stripe } from '$lib/server/stripe'
import { json } from '@sveltejs/kit'

/**
 * Creates a Stripe Checkout Session for the provided items.
 */
export async function POST({ request, url }) {
  try {
    const { items, success_url, cancel_url } = await request.json()

    // Ensure we have items
    if (!items || !items.length) {
      return json({ error: 'No items provided' }, { status: 400 })
    }

    // Map your cart items to Stripe Line Items
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'try', // Using TRY as default based on the project language
        product_data: {
          name: item.name || item.label || 'Davetiye Paketi',
          description: item.description,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents (kuruş)
      },
      quantity: item.quantity || item.qty || 1,
    }))

    // Create the session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: success_url || `${url.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${url.origin}/cancel`, // Or back to /order
    })

    return json({ id: session.id, url: session.url })
  }
  catch (error: any) {
    console.error('Stripe Error:', error)
    return json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
