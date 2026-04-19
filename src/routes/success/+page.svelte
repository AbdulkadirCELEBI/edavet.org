<script lang='ts'>
  import { cart } from '$lib/cart.svelte' // Assuming you have a reset function or can clear items
  import { CheckCircle } from '@lucide/svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    // Optional: Clear cart after successful payment if it was an order
    if (cart && cart.items) {
      cart.items = [] // Or call your clearCart() function
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
