<script lang='ts'>
  // Use SvelteKit's standard way for public env variables. Equivalent to NEXT_PUBLIC_
  import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public'
  import { Check, CreditCard, Loader2, Sparkles } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'

  const packages = [
    {
      id: 'basic',
      name: 'Klasik Davet',
      description: 'Zarif ve sade dijital davetiye tasarımı.',
      price: 249, // 249 TRY
      popular: false,
      features: ['1 Farklı Tema', 'LCV (Katılım Bildirimi)', 'Müzik Ekleme'],
    },
    {
      id: 'premium',
      name: 'Premium Davet',
      description: 'Daha dinamik özellikler ve harita entegrasyonu.',
      price: 499,
      popular: true,
      features: ['3 Farklı Tema', 'LCV (Gelişmiş)', 'Harita ve Galeri', '7/24 Destek'],
    },
    {
      id: 'vip',
      name: 'V.I.P Deneyim',
      description: 'Tamamen size özel tasarım ve asistan desteği.',
      price: 1290,
      popular: false,
      features: ['Sınırsız Tema Revizyonu', 'Özel Domain (isim.com)', 'Misafir Yönetim Paneli', 'Özel Tasarım Desteği'],
    },
  ]

  let processingId = $state<string | null>(null)

  async function handleCheckout(pkg: any) {
    processingId = pkg.id
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            name: pkg.name,
            description: pkg.description,
            price: pkg.price,
            quantity: 1,
          }],
        }),
      })

      const data = await response.json()

      if (data.error) {
        toast.error(`Ödeme başlatılamadı: ${data.error}`)
        return
      }

      if (data.url) {
        // Enforce checking publishable key as requested, then directly use backend URL
        if (!PUBLIC_STRIPE_PUBLISHABLE_KEY) {
          throw new Error('Public Publishable key eksik!')
        }

        // Direct redirect is faster and avoids @stripe/stripe-js Type issues
        window.location.href = data.url
      }
    }
    catch (err) {
      console.error(err)
      toast.error('Beklenmeyen bir hata oluştu')
    }
    finally {
      processingId = null
    }
  }
</script>

<svelte:head>
  <title>Paketler & Ödeme (Demo) | edavet.org</title>
</svelte:head>

<div class='bg-base-100 min-h-screen py-20 px-4'>
  <div class='max-w-6xl mx-auto'>
    <div class='text-center mb-16'>
      <div class='badge badge-primary badge-outline px-4 py-3 mb-4 rounded-full font-medium shadow-sm'>🚀 Stripe Entegrasyon Testi</div>
      <h1 class='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>Hemen Davetiyenizi Oluşturun</h1>
      <p class='text-lg text-base-content/60 max-w-2xl mx-auto'>
        Stripe Checkout entegrasyonu demosu. Aşağıdaki paketlerden birini seçerek Stripe test ortamında güvenle ödeme akışını test edebilirsiniz.
      </p>
    </div>

    <div class='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
      {#each packages as pkg}
        <div class="relative bg-base-100/50 backdrop-blur-xl border border-base-200 rounded-3xl p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl {pkg.popular ? 'border-primary ring-2 ring-primary/20' : ''}">
          {#if pkg.popular}
            <div class='absolute -top-4 left-0 right-0 flex justify-center'>
              <span class='bg-primary text-primary-content text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1'>
                <Sparkles class='w-3 h-3' /> EN ÇOK TERCİH EDİLEN
              </span>
            </div>
          {/if}

          <h3 class='text-2xl font-bold mb-2'>{pkg.name}</h3>
          <p class='text-base-content/60 text-sm mb-6 h-10'>{pkg.description}</p>

          <div class='mb-8'>
            <span class='text-4xl font-black'>{pkg.price}₺</span>
            <span class='text-base-content/50'>/tek ödeme</span>
          </div>

          <ul class='space-y-4 mb-8'>
            {#each pkg.features as feature}
              <li class='flex items-center gap-3 text-sm font-medium text-base-content/80'>
                <div class='w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0'>
                  <Check class='w-3 h-3 text-success' />
                </div>
                {feature}
              </li>
            {/each}
          </ul>

          <button
            class="btn btn-lg w-full rounded-2xl {pkg.popular ? 'btn-primary shadow-lg shadow-primary/30' : 'btn-outline bg-base-100'} transition-all flex items-center gap-2"
            disabled={processingId !== null}
            onclick={() => handleCheckout(pkg)}
          >
            {#if processingId === pkg.id}
              <Loader2 class='w-5 h-5 animate-spin' /> Yönlendiriliyor...
            {:else}
              <CreditCard class='w-5 h-5' /> Ödemeye Geç
            {/if}
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>
