<script lang='ts'>
  import { clearCartLocal } from '$lib/cart.svelte'
  import { CheckCircle } from '@lucide/svelte'
  import { onMount } from 'svelte'

  onMount(async () => {
    // Clear local cart state
    clearCartLocal()
    // Also clear server-side cart session
    try {
      await fetch('/api/cart', { method: 'DELETE', body: JSON.stringify({ clearAll: true }), headers: { 'Content-Type': 'application/json' } })
    }
    catch (e) {
      console.error('Cart clear failed', e)
    }
  })
</script>

<div class='min-h-[70vh] flex items-center justify-center bg-base-100 p-4'>
  <div class='max-w-md w-full bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200 text-center'>
    <div class='w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6'>
      <CheckCircle class='w-10 h-10 text-success' />
    </div>
    <h1 class='text-3xl font-bold mb-4'>Ödeme Başarılı!</h1>
    <p class='text-base-content/70 mb-8'>
      Teşekkür ederiz. Ödemeniz başarıyla alındı ve siparişiniz onaylandı. Davetiyenizle ilgili detaylar mail adresinize gönderilecektir.
    </p>
    <a href='/dashboard' class='btn btn-primary w-full rounded-xl'>
      Kontrol Paneline Dön
    </a>
  </div>
</div>
