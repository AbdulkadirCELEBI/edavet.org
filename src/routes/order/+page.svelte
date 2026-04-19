<script lang='ts'>
  import type { CartItem } from '$lib/cart.svelte'
  import { page } from '$app/stores'
  import { cart, removeFromCart } from '$lib/cart.svelte'
  import {
    AlertCircle,
    CheckCircle2,
    Loader2,
    Lock,
    Minus,
    Plus,
    ShieldCheck,
    Tag,
    Truck,
    X,
  } from '@lucide/svelte'
  import { onMount } from 'svelte'
  import { toast } from 'svelte-sonner'
  import { fade, slide } from 'svelte/transition'

  const currentStep = $state(1)
  const isCartEmpty = $derived(cart.items.length === 0)

  // Pricing State
  const subtotal = $derived(cart.items.reduce((acc: number, item: CartItem) => acc + (item.price * item.qty), 0))
  const shipping: number = $state(0)
  let discount = $state(0)
  const taxRate = 0.20
  const tax = $derived(subtotal * taxRate)
  const total = $derived(subtotal + shipping + tax - discount)
  let couponCode = $state('')
  let couponError = $state('')

  const deliveryMethod = 'standard'
  let isProcessing = $state(false)

  async function handlePayment() {
    isProcessing = true

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart.items }),
      })

      const data = await response.json()

      if (data.error) {
        toast.error(`Ödeme başlatılamadı: ${data.error}`)
        isProcessing = false
        return
      }

      if (data.url) {
        // Redirect to Stripe Checkout directly
        window.location.href = data.url
      }
    }
    catch (err) {
      console.error(err)
      toast.error('Beklenmeyen bir hata oluştu')
      isProcessing = false
    }
  }

  function updateQty(id: string, delta: number) {
    const item = cart.items.find((i: CartItem) => i.id === id)
    if (item && item.qty + delta > 0) {
      item.qty += delta
    }
  }

  function removeItem(id: string) {
    removeFromCart(id)
  }

  function applyCoupon() {
    if (couponCode.toLowerCase() === 'indirim10') {
      discount = subtotal * 0.10
      couponError = ''
    }
    else {
      couponError = 'Geçersiz veya süresi dolmuş kupon kodu.'
      discount = 0
    }
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get('type')
    if (type) {
    // Logic to override cart based on query param can go here
    }
  })
</script>

<div class='min-h-screen bg-[#F9FAFB] text-base-content font-sans'>
  <!-- Header / Stepper -->
  <header class='bg-base-100 border-b border-base-200 sticky top-0 z-40'>
    <div class='max-w-6xl mx-auto px-4 h-20 flex items-center justify-between'>
      <div class='font-bold text-2xl tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
        <a href='/'>edavet.org</a>
      </div>

      <div class='hidden md:flex items-center space-x-4'>
        <div class='flex items-center'>
          <div class='flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-all duration-300 bg-primary border-primary text-primary-content'>
            1
          </div>
          <span class='ml-2 text-sm font-medium text-base-content'>Sepetim</span>
          <div class='w-12 h-[2px] mx-4 bg-base-200'></div>
        </div>
        <div class='flex items-center opacity-60'>
          <div class='flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-all duration-300 border-base-300 text-base-300'>
            2
          </div>
          <span class='ml-2 text-sm font-medium text-base-content/40'>Güvenli Ödeme</span>
        </div>
      </div>

      <div class='flex items-center gap-2 text-sm text-base-content/60 font-medium'>
        <Lock class='w-4 h-4' /> Güvenli Ödeme
      </div>
    </div>
  </header>

  <main class='max-w-6xl mx-auto px-4 py-8 md:py-12'>
    {#if isCartEmpty && currentStep === 1}
      <!-- Empty Cart State -->
      <div class='bg-base-100 rounded-3xl p-12 text-center shadow-xs border border-base-200 max-w-2xl mx-auto' in:fade>
        <div class='w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6'>
          <Truck class='w-12 h-12 text-primary/50' />
        </div>
        <h2 class='text-3xl font-bold mb-4'>Sepetiniz Boş</h2>
        <p class='text-base-content/60 mb-8 max-w-md mx-auto'>
          Davetiye tasarımları oluşturmak veya satın almak için menüden istediğiniz kategoriyi seçebilirsiniz.
        </p>
        {#if $page.data.session}
          <a href='/dashboard' class='btn btn-primary btn-lg rounded-xl shadow-lg shadow-primary/20 px-8'>
            Davetiye Oluştur
          </a>
        {:else}
          <a href='/register' class='btn btn-primary btn-lg rounded-xl shadow-lg shadow-primary/20 px-8'>
            Kayıt Ol
          </a>
        {/if}
      </div>
    {:else}
      <div class='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start' in:fade>

        <!-- Left Column: Dynamic Content Based on Step -->
        <div class='lg:col-span-7 xl:col-span-8 w-full space-y-6'>

          <!-- CART SECTION -->
          <div class='bg-base-100 rounded-3xl p-6 md:p-8 shadow-xs border border-base-200' transition:slide>
            <h2 class='text-2xl font-bold mb-6 flex items-center justify-between'>
              Sepetiniz
              <span class='text-sm font-normal text-base-content/50'>{cart.items.length} Ürün</span>
            </h2>

            <div class='space-y-6'>
              {#each cart.items as item (item.id)}
                <div class='flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-base-100 border border-base-200 hover:border-primary/30 transition-all group'>
                  <div class='w-full sm:w-28 h-28 rounded-xl overflow-hidden bg-base-200 shrink-0 relative'>
                    <img src='https://images.unsplash.com/photo-1544591461-1c1cc153c30a?q=80&w=200&auto=format&fit=crop' alt={item.label} class='w-full h-full object-cover' />
                  </div>
                  <div class='grow flex flex-col justify-center'>
                    <div class='flex justify-between items-start mb-1'>
                      <h3 class='font-bold text-lg leading-tight'>{item.label}</h3>
                      <button onclick={() => removeItem(item.id)} class='text-base-content/40 hover:text-error transition-colors p-1'>
                        <X class='w-5 h-5' />
                      </button>
                    </div>
                    <p class='text-sm text-base-content/60 mb-4'>Özel Tasarım Davetiye</p>

                    <div class='flex items-center justify-between mt-auto'>
                      <div class='flex items-center bg-base-200 rounded-lg p-1'>
                        <button onclick={() => updateQty(item.id, -10)} class='btn btn-ghost btn-sm btn-square rounded-md'>
                          <Minus class='w-4 h-4' />
                        </button>
                        <span class='w-12 text-center font-semibold'>{item.qty}</span>
                        <button onclick={() => updateQty(item.id, 10)} class='btn btn-ghost btn-sm btn-square rounded-md'>
                          <Plus class='w-4 h-4' />
                        </button>
                      </div>
                      <div class='text-lg font-bold'>
                        {(item.price * item.qty).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <div class='bg-base-100 rounded-3xl p-6 md:p-8 shadow-xs border border-base-200'>
            <h3 class='font-bold text-lg mb-4'>Sipariş Notu (Opsiyonel)</h3>
            <textarea class='textarea textarea-bordered w-full h-24 rounded-xl focus:border-[#1C64F2] bg-base-100/50' placeholder='Bize iletmek istediğiniz bir not var mı?'></textarea>
          </div>

        </div>

        <!-- Right Column: Sticky Order Summary -->
        <div class='lg:col-span-5 xl:col-span-4 w-full'>
          <div class='bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden sticky top-28'>
            <div class='p-6 md:p-8'>
              <h2 class='text-xl font-bold mb-6'>Sipariş Özeti</h2>

              <div class='space-y-4 text-sm font-medium'>
                <div class='flex justify-between items-center text-base-content/70'>
                  <span>Ara Toplam</span>
                  <span class='font-semibold text-base-content'>{subtotal.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>

                <div class='flex justify-between items-center text-base-content/70'>
                  <span>Tahmini Vergi (%20)</span>
                  <span class='font-semibold text-base-content'>{tax.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>

                <div class='flex justify-between items-center text-base-content/70'>
                  <span>Kargo Ücreti</span>
                  <span class='font-semibold text-base-content'>{shipping === 0 || deliveryMethod === 'standard' ? 'Ücretsiz' : shipping.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>

                {#if discount > 0}
                  <div class='flex justify-between items-center text-success bg-success/10 p-2 rounded-lg' transition:slide>
                    <span class='flex items-center gap-1'><Tag class='w-4 h-4' /> İndirim (İNDİRİM10)</span>
                    <span class='font-semibold'>-{discount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                  </div>
                {/if}

                <div class='divider my-2'></div>

                <div class='flex justify-between items-center text-xl'>
                  <span class='font-bold'>Genel Toplam</span>
                  <span class='font-black text-primary'>{(total - (deliveryMethod === 'standard' ? shipping : 0)).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>
              </div>

              <!-- Coupon Area -->
              <div class='mt-8'>
                <div class='join w-full'>
                  <input type='text' class='input input-bordered join-item w-full bg-base-200/50 focus:border-primary text-sm font-mono uppercase' placeholder='Kupon Kodu' bind:value={couponCode} />
                  <button class='btn btn-neutral join-item font-bold' onclick={applyCoupon}>Uygula</button>
                </div>
                {#if couponError}
                  <p class='text-error text-xs mt-2 flex items-center gap-1'><AlertCircle class='w-3 h-3' /> {couponError}</p>
                {/if}
              </div>

              <!-- Main CTA -->
              <div class='mt-8'>
                <button
                  class="btn btn-primary btn-lg w-full rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 font-bold text-lg flex items-center justify-center gap-2 {isProcessing ? 'btn-disabled opacity-80' : ''}"
                  onclick={handlePayment}
                  disabled={isProcessing}
                >
                  {#if isProcessing}
                    <Loader2 class='w-5 h-5 animate-spin' /> Yönlendiriliyor...
                  {:else}
                    <Lock class='w-5 h-5' /> Güvenle Öde
                  {/if}
                </button>
              </div>

            </div>

            <!-- Trust Badges Footer -->
            <div class='bg-base-200 p-6 border-t border-base-300'>
              <div class='grid grid-cols-2 gap-4 text-xs font-semibold opacity-70'>
                <div class='flex flex-col items-center gap-2 text-center'>
                  <ShieldCheck class='w-6 h-6 text-base-content' />
                  256-bit SSL Güvenliği
                </div>
                <div class='flex flex-col items-center gap-2 text-center'>
                  <CheckCircle2 class='w-6 h-6 text-base-content' />
                  %100 İade Garantisi
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    {/if}
  </main>
</div>
