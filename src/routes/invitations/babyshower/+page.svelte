<script lang='ts'>
  import { Baby, Heart, Camera, Gift, Star, Users, CloudRain, ChevronRight, Sparkles } from '@lucide/svelte'

  const features = [
    { icon: Baby, title: 'Bebek Temalı Tasarımlar', desc: 'Erkek ve kız bebek için özel renk paletleri ve sevimli illüstrasyonlar.' },
    { icon: Gift, title: 'İstek Listesi', desc: 'Misafirlerinizin doğru hediye seçmesi için bebek ihtiyaç listenizi paylaşın.' },
    { icon: Camera, title: 'Ultrason Galerisi', desc: 'Bebeğinizin ultrason fotoğraflarını sevimli çerçevelerle sergileyin.' },
    { icon: Heart, title: 'İsim Tahmin Oyunu', desc: 'Misafirlerinizin bebeğin adını tahmin etmesini sağlayan interaktif oyun.' },
    { icon: Star, title: 'Cinsiyet Açıklaması', desc: 'Kız mı erkek mi? Büyük sürprizi davetiye üzerinden yapın!' },
    { icon: Users, title: 'LCV & Katılım', desc: 'Kim geliyor, kim gelemiyor — hepsini tek ekrandan takip edin.' },
  ]
</script>

<svelte:head>
  <title>Bebek Partisi (Baby Shower) Davetiyesi — edavet.org</title>
  <meta name='description' content='Minik mucizeniz için en tatlı dijital baby shower davetiyeleri. İstek listesi, ultrason galerisi ve cinsiyet açıklaması özellikleri.' />
</svelte:head>

<!-- Hero - Tatlı, Pastel Tema -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-sky-50 via-pink-50 to-yellow-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-sky-200/40 dark:bg-sky-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-pink-200/40 dark:bg-pink-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[12%] left-[8%] text-6xl animate-pulse'>🍼</div>
    <div class='absolute top-[22%] right-[12%] text-5xl animate-pulse' style='animation-delay: 0.5s'>👶</div>
    <div class='absolute bottom-[18%] left-[18%] text-4xl animate-pulse' style='animation-delay: 1s'>🧸</div>
    <div class='absolute bottom-[28%] right-[22%] text-5xl animate-pulse' style='animation-delay: 1.5s'>🎀</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Baby class='w-4 h-4' />
        Baby Shower Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Minik Mucize
        <br />
        <span class='bg-gradient-to-r from-sky-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent italic'>
          Yolda! 👶
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Bebeğinizin gelişini kutlayın! Tatlı tasarımlar, istek listesi ve interaktif oyunlarla misafirlerinizi bu büyülü ana ortak edin.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-sky-400 to-pink-400 border-0 text-white shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Baby Shower Davetiyesi Yap
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Önizleme Kartı -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Tatlı Bir <span class='text-sky-500'>Davetiye</span></h2>
    </div>
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-sky-50 to-pink-50 dark:from-base-200 dark:to-base-300 shadow-2xl border border-sky-100 dark:border-base-content/10 overflow-hidden'>
        <div class='h-2 bg-gradient-to-r from-sky-300 via-pink-300 to-yellow-300'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='text-6xl mb-2'>🧸</div>
          <p class='text-sky-500 font-semibold tracking-widest text-sm uppercase'>Baby Shower'ımıza Davetlisiniz!</p>
          <div class='divider divider-neutral/10 my-2'></div>
          <h3 class='text-3xl font-black text-sky-600 dark:text-sky-400'>Bebek Kaya</h3>
          <div class='flex gap-2 mt-2'>
            <span class='badge bg-pink-100 dark:bg-pink-900/30 text-pink-500 border-0 font-bold'>Kız mı?</span>
            <span class='badge bg-sky-100 dark:bg-sky-900/30 text-sky-500 border-0 font-bold'>Erkek mi?</span>
          </div>
          <p class='text-base-content/50 font-medium mt-3'>3 Mayıs 2026 — Cumartesi, 15:00</p>
          <p class='text-base-content/40 text-sm font-medium'>Cafe Blossom, İzmir</p>
          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-sky-400 border-0 text-white hover:bg-sky-500'>Geliyorum! 🎉</button>
            <button class='btn btn-sm btn-outline border-sky-300 text-sky-500 hover:bg-sky-400 hover:text-white hover:border-sky-400'>İstek Listesi 🎁</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Özellikler -->
<section class='py-24 bg-base-200/50'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Minik Detaylar, <span class='text-sky-500'>Büyük Farklar</span></h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-sky-100 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mb-4 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300'>
              <f.icon class='w-7 h-7' />
            </div>
            <h3 class='text-xl font-bold mb-2'>{f.title}</h3>
            <p class='text-base-content/60 font-medium leading-relaxed'>{f.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class='py-24 bg-gradient-to-r from-sky-400 via-pink-400 to-yellow-400 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🍼</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Bebeğinizi Kutlayın!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>En tatlı baby shower davetiyesini şimdi oluşturun.</p>
    <a href='/order' class='btn btn-lg bg-white text-sky-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <Baby class='w-5 h-5' />
    </a>
  </div>
</section>
