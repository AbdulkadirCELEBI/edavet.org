<script lang='ts'>
  import type { CartItem } from '$lib/cart.svelte'
  import { page } from '$app/stores'
  import { cart, removeFromCart } from '$lib/cart.svelte'
  import {
    AlertCircle,
    ArrowRight,
    Building,
    CheckCircle2,
    CreditCard,
    Info,
    Lock,
    Minus,
    Plus,
    ShieldCheck,
    Tag,
    Truck,
    User,
    X,
  } from '@lucide/svelte'
  import { onMount } from 'svelte'
  import { toast } from 'svelte-sonner'
  import { fade, slide } from 'svelte/transition'

  let currentStep = $state(1)
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

  // Form State
  const deliveryMethod = $state('standard')
  let paymentMethod = $state('credit_card')

  // iyzico-style Card State
  let cardNumber = $state('')
  let cardExpiry = $state('')
  let cardCvc = $state('')
  let cardHolder = $state('')
  let isCardFlipped = $state(false)
  let selectedInstallment = $state(1)
  let saveCard = $state(false)
  let use3DSecure = $state(true)
  let isProcessing = $state(false)

  // Card brand detection
  const cardBrand = $derived.by(() => {
    const num = cardNumber.replace(/\s/g, '')
    if (num.startsWith('4'))
      return 'visa'
    if (/^5[1-5]/.test(num) || /^2[2-7]/.test(num))
      return 'mastercard'
    if (num.startsWith('3') && (num[1] === '4' || num[1] === '7'))
      return 'amex'
    if (num.startsWith('9792'))
      return 'troy'
    return ''
  })

  const cardBrandLabel = $derived.by(() => {
    if (cardBrand === 'visa')
      return 'Visa'
    if (cardBrand === 'mastercard')
      return 'Mastercard'
    if (cardBrand === 'amex')
      return 'American Express'
    if (cardBrand === 'troy')
      return 'Troy'
    return ''
  })

  // Show installments only if card has enough digits
  const showInstallments = $derived(cardNumber.replace(/\s/g, '').length >= 6)

  // Installment mock data (iyzico taksit tablosu)
  const installmentOptions = [
    { count: 1, label: 'Tek Çekim', rate: 0 },
    { count: 2, label: '2 Taksit', rate: 0 },
    { count: 3, label: '3 Taksit', rate: 1.59 },
    { count: 6, label: '6 Taksit', rate: 4.49 },
    { count: 9, label: '9 Taksit', rate: 7.49 },
    { count: 12, label: '12 Taksit', rate: 11.49 },
  ]

  function getInstallmentTotal(rate: number) {
    return total * (1 + rate / 100)
  }

  function getInstallmentMonthly(count: number, rate: number) {
    return getInstallmentTotal(rate) / count
  }

  // Card number formatting (0000 0000 0000 0000)
  function formatCardNumber(e: Event) {
    const input = e.target as HTMLInputElement
    const value = input.value.replace(/\D/g, '').substring(0, 16)
    const formatted = value.replace(/(.{4})/g, '$1 ').trim()
    cardNumber = formatted
    input.value = formatted
  }

  // Expiry formatting (MM/YY)
  function formatExpiry(e: Event) {
    const input = e.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '').substring(0, 4)
    if (value.length >= 3) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`
    }
    cardExpiry = value
    input.value = value
  }

  function handleCvcFocus() {
    isCardFlipped = true
  }
  function handleCvcBlur() {
    isCardFlipped = false
  }

  async function handlePayment() {
    isProcessing = true
    // Simulate payment processing
    await new Promise(r => setTimeout(r, 3000))
    isProcessing = false
    toast.success('Ödemeniz başarıyla alındı! (Demo)')
  }

  function updateQty(id: string, delta: number) {
    const item = cart.items.find((i: CartItem) => i.id === id)
    if (item && item.qty + delta > 0) {
      item.qty += delta
    }
  }

  function removeItem(id: string) {
    removeFromCart(id)
    if (cart.items.length === 0)
      currentStep = 1
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

  function gotoStep(step: number) {
    if (step >= 1 && step <= 2) {
      if (isCartEmpty && step > 1)
        return
      currentStep = step
    }
  }

  function nextStep() {
    if (currentStep < 2)
      currentStep++
  }

  function prevStep() {
    if (currentStep > 1)
      currentStep--
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
        {#each ['Sepetim', 'Ödeme'] as label, i}
          <div class='flex items-center'>
            <button
              class='flex items-center justify-center gap-2 group transition-opacity hover:opacity-80'
              onclick={() => gotoStep(i + 1)}
              disabled={isCartEmpty && i + 1 > 1}
            >
              <div class="flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-all duration-300
                {currentStep > i + 1
                  ? 'bg-primary border-primary text-primary-content'
                  : currentStep === i + 1 ? 'border-primary text-primary' : 'border-base-300 text-base-300'}">
                {currentStep > i + 1 ? '✓' : i + 1}
              </div>
              <span class="text-sm font-medium transition-colors {currentStep === i + 1 ? 'text-base-content' : 'text-base-content/40 group-hover:text-base-content/60'}">
                {label}
              </span>
            </button>
            {#if i < 1}
              <div class="w-12 h-[2px] mx-4 {currentStep > i + 1 ? 'bg-primary' : 'bg-base-200'}"></div>
            {/if}
          </div>
        {/each}
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

          {#if currentStep === 1}
            <!-- STEP 1: CART -->
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

          {:else if currentStep === 2}
            <!-- STEP 2: iyzico-style PAYMENT -->
            <div class='space-y-6' transition:slide>

              <!-- iyzico Header Badge -->
              <div class='flex items-center justify-between bg-base-100 rounded-2xl p-4 border border-base-200 shadow-xs'>
                <div class='flex items-center gap-3'>
                  <div class='p-2 bg-[#1C64F2]/10 rounded-xl'>
                    <ShieldCheck class='w-5 h-5 text-[#1C64F2]' />
                  </div>
                  <div>
                    <p class='text-sm font-bold'>iyzico Güvenli Ödeme</p>
                    <p class='text-xs text-base-content/50'>256-bit SSL ile korunmaktadır</p>
                  </div>
                </div>
                <div class='flex items-center gap-2'>
                  <span class='badge badge-ghost text-[10px] font-bold opacity-60'>PCI-DSS</span>
                  <span class='badge badge-ghost text-[10px] font-bold opacity-60'>3D Secure</span>
                </div>
              </div>

              <!-- Payment Method Tabs -->
              <div class='bg-base-100 rounded-3xl shadow-xs border border-base-200 overflow-hidden'>
                <div class='flex border-b border-base-200'>
                  <button
                    class="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-all border-b-2 {paymentMethod === 'credit_card' ? 'border-[#1C64F2] text-[#1C64F2] bg-[#1C64F2]/5' : 'border-transparent text-base-content/50 hover:text-base-content/70'}"
                    onclick={() => paymentMethod = 'credit_card'}
                  >
                    <CreditCard class='w-5 h-5' /> Kredi / Banka Kartı
                  </button>
                  <button
                    class="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-all border-b-2 {paymentMethod === 'transfer' ? 'border-[#1C64F2] text-[#1C64F2] bg-[#1C64F2]/5' : 'border-transparent text-base-content/50 hover:text-base-content/70'}"
                    onclick={() => paymentMethod = 'transfer'}
                  >
                    <Building class='w-5 h-5' /> Havale / EFT
                  </button>
                </div>

                <div class='p-6 md:p-8'>
                  {#if paymentMethod === 'credit_card'}

                    <!-- Visual Card Preview -->
                    <div class='mb-8 flex justify-center'>
                      <div class='w-full max-w-sm perspective-1000'>
                        <div class="relative w-full h-48 transition-transform duration-700 {isCardFlipped ? 'transform-[rotateY(180deg)]' : ''}" style='transform-style: preserve-3d;'>

                          <!-- Card Front -->
                          <div class="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between text-white shadow-2xl backface-hidden bg-linear-to-br {cardBrand === 'visa' ? 'from-[#1A1F71] to-[#2B5CC4]' : cardBrand === 'mastercard' ? 'from-[#EB001B] to-[#F79E1B]' : cardBrand === 'troy' ? 'from-[#00A859] to-[#006838]' : 'from-base-content/80 to-base-content/60'}">
                            <div class='flex justify-between items-start'>
                              <div class='w-12 h-9 bg-amber-300/80 rounded-md shadow-inner'></div>
                              <span class='text-sm font-black tracking-widest uppercase opacity-90'>{cardBrandLabel || 'KART'}</span>
                            </div>
                            <div class='font-mono text-xl tracking-[0.25em]'>
                              {cardNumber || '•••• •••• •••• ••••'}
                            </div>
                            <div class='flex justify-between text-xs font-medium opacity-80'>
                              <div>
                                <div class='text-[9px] uppercase opacity-50 mb-0.5'>Kart Sahibi</div>
                                {cardHolder.toUpperCase() || 'AD SOYAD'}
                              </div>
                              <div class='text-right'>
                                <div class='text-[9px] uppercase opacity-50 mb-0.5'>Son Kullanma</div>
                                {cardExpiry || 'AA/YY'}
                              </div>
                            </div>
                          </div>

                          <!-- Card Back -->
                          <div class='absolute inset-0 rounded-2xl bg-linear-to-br from-base-content/70 to-base-content/50 text-white shadow-2xl backface-hidden transform-[rotateY(180deg)] overflow-hidden'>
                            <div class='w-full h-12 bg-base-content/60 mt-8'></div>
                            <div class='px-6 mt-6'>
                              <div class='text-[9px] uppercase opacity-50 mb-2'>CVC / CVV</div>
                              <div class='bg-white/20 rounded-lg px-4 py-2 text-right font-mono text-lg tracking-widest'>
                                {cardCvc || '•••'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card Fields -->
                    <div class='space-y-5'>
                      <div class='form-control w-full'>
                        <label class='label' for='card-holder'><span class='label-text font-semibold text-base-content/70 text-sm'>Kart Üzerindeki İsim</span></label>
                        <div class='relative'>
                          <div class='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none opacity-30'>
                            <User class='w-5 h-5' />
                          </div>
                          <input id='card-holder' type='text' class='input input-bordered w-full pl-12 rounded-xl focus:border-[#1C64F2] bg-base-100' placeholder='Kart üzerindeki isim' bind:value={cardHolder} />
                        </div>
                      </div>

                      <div class='form-control w-full'>
                        <label class='label' for='card-number'>
                          <span class='label-text font-semibold text-base-content/70 text-sm'>Kart Numarası</span>
                          {#if cardBrand}
                            <span class="label-text-alt badge badge-sm {cardBrand === 'visa' ? 'bg-[#1A1F71] text-white' : cardBrand === 'mastercard' ? 'bg-[#EB001B] text-white' : cardBrand === 'troy' ? 'bg-[#00A859] text-white' : 'badge-ghost'}">{cardBrandLabel}</span>
                          {/if}
                        </label>
                        <div class='relative'>
                          <div class='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none opacity-30'>
                            <CreditCard class='w-5 h-5' />
                          </div>
                          <input
                            id='card-number'
                            type='text'
                            class='input input-bordered w-full pl-12 rounded-xl focus:border-[#1C64F2] font-mono text-lg tracking-wider bg-base-100'
                            placeholder='0000 0000 0000 0000'
                            maxlength='19'
                            oninput={formatCardNumber}
                            value={cardNumber}
                          />
                        </div>
                      </div>

                      <div class='grid grid-cols-2 gap-4'>
                        <div class='form-control w-full'>
                          <label class='label' for='card-expiry'><span class='label-text font-semibold text-base-content/70 text-sm'>Son Kullanma Tarihi</span></label>
                          <input
                            id='card-expiry'
                            type='text'
                            class='input input-bordered w-full rounded-xl focus:border-[#1C64F2] font-mono text-center text-lg bg-base-100'
                            placeholder='AA/YY'
                            maxlength='5'
                            oninput={formatExpiry}
                            value={cardExpiry}
                          />
                        </div>
                        <div class='form-control w-full'>
                          <label class='label' for='card-cvc'><span class='label-text font-semibold text-base-content/70 text-sm'>CVC / CVV</span></label>
                          <input
                            id='card-cvc'
                            type='password'
                            class='input input-bordered w-full rounded-xl focus:border-[#1C64F2] font-mono text-center text-lg bg-base-100'
                            placeholder='•••'
                            maxlength='4'
                            bind:value={cardCvc}
                            onfocus={handleCvcFocus}
                            onblur={handleCvcBlur}
                          />
                        </div>
                      </div>

                      <!-- 3D Secure & Save Card -->
                      <div class='flex flex-col sm:flex-row gap-4 pt-2'>
                        <label class='flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-xl border border-base-200 hover:border-[#1C64F2]/30 transition-colors bg-base-200/30'>
                          <input type='checkbox' class='checkbox checkbox-sm checkbox-primary' bind:checked={use3DSecure} />
                          <div>
                            <span class='text-sm font-bold'>3D Secure ile öde</span>
                            <p class='text-[11px] text-base-content/50'>Ek güvenlik doğrulaması</p>
                          </div>
                        </label>
                        <label class='flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-xl border border-base-200 hover:border-[#1C64F2]/30 transition-colors bg-base-200/30'>
                          <input type='checkbox' class='checkbox checkbox-sm checkbox-primary' bind:checked={saveCard} />
                          <div>
                            <span class='text-sm font-bold'>Kartımı kaydet</span>
                            <p class='text-[11px] text-base-content/50'>Sonraki ödemeler için</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    <!-- Installment Table (iyzico-style, appears after BIN entry) -->
                    {#if showInstallments}
                      <div class='mt-8 border border-base-200 rounded-2xl overflow-hidden' transition:slide>
                        <div class='bg-base-200/50 px-5 py-3 border-b border-base-200'>
                          <h4 class='font-bold text-sm flex items-center gap-2'>
                            Taksit Seçenekleri
                            {#if cardBrandLabel}
                              <span class='badge badge-sm badge-primary'>{cardBrandLabel}</span>
                            {/if}
                          </h4>
                        </div>
                        <div class='divide-y divide-base-200'>
                          {#each installmentOptions as opt}
                            <label class="flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-base-200/30 transition-colors {selectedInstallment === opt.count ? 'bg-[#1C64F2]/5' : ''}">
                              <div class='flex items-center gap-3'>
                                <input type='radio' name='installment' class='radio radio-sm radio-primary' value={opt.count} bind:group={selectedInstallment} />
                                <span class='text-sm font-semibold'>{opt.label}</span>
                                {#if opt.rate === 0}
                                  <span class='badge badge-success badge-xs font-bold'>Komisyonsuz</span>
                                {/if}
                              </div>
                              <div class='text-right'>
                                <div class='text-sm font-bold'>
                                  {opt.count === 1 ? '' : `${getInstallmentMonthly(opt.count, opt.rate).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })} x ${opt.count}`}
                                </div>
                                <div class='text-xs text-base-content/50'>
                                  Toplam: {getInstallmentTotal(opt.rate).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                                </div>
                              </div>
                            </label>
                          {/each}
                        </div>
                      </div>
                    {/if}

                  {:else}
                    <!-- Havale / EFT -->
                    <div class='p-6 bg-base-200/50 rounded-2xl flex gap-4 items-start' transition:slide>
                      <Info class='w-6 h-6 text-[#1C64F2] shrink-0 mt-1' />
                      <div>
                        <h4 class='font-bold text-lg mb-3'>Havale / EFT Bilgileri</h4>
                        <p class='text-sm opacity-80 mb-4'>Siparişi tamamladıktan sonra sipariş numaranızı açıklama kısmına yazarak aşağıdaki IBAN numarasına gönderim yapınız.</p>
                        <div class='space-y-3'>
                          <div class='bg-base-100 p-4 rounded-xl border border-base-200'>
                            <p class='text-xs font-bold text-base-content/50 mb-1'>Garanti BBVA</p>
                            <p class='font-mono text-sm font-bold'>TR00 0000 0000 0000 0000 0000 00</p>
                          </div>
                          <div class='bg-base-100 p-4 rounded-xl border border-base-200'>
                            <p class='text-xs font-bold text-base-content/50 mb-1'>Ziraat Bankası</p>
                            <p class='font-mono text-sm font-bold'>TR00 0000 0000 0000 0000 0000 00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/if}
                </div>
              </div>

              <!-- Order Note -->
              <div class='bg-base-100 rounded-3xl p-6 md:p-8 shadow-xs border border-base-200'>
                <h3 class='font-bold text-lg mb-4'>Sipariş Notu (Opsiyonel)</h3>
                <textarea class='textarea textarea-bordered w-full h-24 rounded-xl focus:border-[#1C64F2] bg-base-100/50' placeholder='Bize iletmek istediğiniz bir not var mı?'></textarea>
              </div>
            </div>
          {/if}

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
                {#if currentStep < 2}
                  <button class='btn btn-primary btn-lg w-full rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 font-bold text-lg' onclick={nextStep}>
                    Ödemeye Geç <ArrowRight class='w-5 h-5 ml-1' />
                  </button>
                {:else}
                  <button
                    class="btn btn-lg w-full rounded-2xl shadow-lg shadow-primary/25 hover:shadow-primary/40 font-bold text-lg flex items-center gap-2 {isProcessing ? 'btn-disabled' : 'btn-primary'}"
                    onclick={handlePayment}
                    disabled={isProcessing}
                  >
                    {#if isProcessing}
                      <span class='loading loading-spinner loading-md'></span> Ödeme İşleniyor...
                    {:else}
                      <Lock class='w-5 h-5' /> Güvenli Ödeme Yap
                    {/if}
                  </button>
                {/if}

                {#if currentStep > 1}
                  <button class='btn btn-ghost btn-sm w-full mt-2 font-medium' onclick={prevStep}>
                    Geri Dön
                  </button>
                {/if}
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
