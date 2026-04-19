import { STRIPE_SECRET_KEY } from '$env/static/private'
import Stripe from 'stripe'

if (!STRIPE_SECRET_KEY || STRIPE_SECRET_KEY.includes('sk_test_mock')) {
  throw new Error('Geçersiz veya eksik Stripe Gizli Anahtarı! Lütfen .env.local dosyanızdaki STRIPE_SECRET_KEY değerini gerçek verinizle güncelleyin.')
}

// Initialize Stripe strictly with the environment variable
export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16' as any,
})
