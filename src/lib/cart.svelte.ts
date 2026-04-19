export interface CartItem {
    id: string
    label: string
    qty: number
    price: number
}

export const cart = $state<{ count: number, items: CartItem[] }>({
    count: 0,
    items: [],
})

export async function loadCart() {
    try {
        const res = await fetch('/api/cart')
        const data = await res.json()
        cart.count = data.count || 0
        cart.items = (data.items || []).map((i: any) => ({ ...i, qty: 100, price: i.label.includes('Düğün') ? 15.50 : 5.00 }))
    }
 catch (e) {
        console.error('Cart load failed', e)
    }
}

export async function addToCart(label: string) {
    try {
        const res = await fetch('/api/cart', {
            method: 'POST',
            body: JSON.stringify({ label }),
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json()
        if (data.items) {
           cart.count = data.count
           cart.items = data.items.map((i: any) => ({ ...i, qty: 100, price: i.label.includes('Düğün') ? 15.50 : 5.00 }))
        }
 else {
           cart.count++
        }
    }
 catch {
        cart.count++ // Fallback
    }
}

export async function removeFromCart(id: string) {
    try {
        await fetch('/api/cart', {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        })
        cart.items = cart.items.filter((i: any) => i.id !== id)
        cart.count = cart.items.length
    }
 catch (e) {
        console.error(e)
    }
}

export function clearCartLocal() {
    cart.count = 0
    cart.items = []
}
