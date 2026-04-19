<script lang='ts'>
  import { Crown, Camera, MapPin, Music, Users, Star, ChevronRight, Sparkles, Clock } from '@lucide/svelte'

  const features = [
    { icon: Crown, title: 'Şehzade Temalı Tasarım', desc: 'Geleneksel motifler ve modern çizgilerle oğlunuz için kraliyet temalı davetiyeler.' },
    { icon: Camera, title: 'Fotoğraf Galerisi', desc: 'Oğlunuzun en sevimli fotoğraflarını zarif bir galeride sergileyin.' },
    { icon: Music, title: 'Mehter Marşı', desc: 'Davetiyenize geleneksel veya modern arka plan müziği ekleyin.' },
    { icon: MapPin, title: 'Salon Konumu', desc: 'Merasim ve davet salonu adreslerini haritada paylaşın.' },
    { icon: Clock, title: 'Geri Sayım', desc: 'Büyük güne kalan süreyi canlı geri sayımla gösterin.' },
    { icon: Users, title: 'LCV Takibi', desc: 'Misafir katılım durumlarını anlık olarak kontrol edin.' },
  ]
</script>

<svelte:head>
  <title>Sünnet Merasimi Davetiyesi — edavet.org</title>
  <meta name='description' content='Geleneksel ve modern dijital sünnet merasimi davetiyeleri. Şehzade temalı tasarımlar, müzik ve fotoğraf galerisi ile özel gününüzü kutlayın.' />
</svelte:head>

<!-- Hero - Geleneksel & Modern -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-amber-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-amber-200/30 dark:bg-amber-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[12%] left-[10%] text-6xl animate-pulse'>👑</div>
    <div class='absolute top-[25%] right-[15%] text-5xl animate-pulse' style='animation-delay: 0.5s'>🎠</div>
    <div class='absolute bottom-[20%] left-[20%] text-4xl animate-pulse' style='animation-delay: 1s'>🏰</div>
    <div class='absolute bottom-[30%] right-[25%] text-5xl animate-pulse' style='animation-delay: 1.5s'>⭐</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Crown class='w-4 h-4' />
        Sünnet Merasimi Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Küçük Şehzadenizin
        <br />
        <span class='bg-gradient-to-r from-blue-500 via-sky-500 to-amber-500 bg-clip-text text-transparent italic'>
          Büyük Günü 👑
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Oğlunuzun bu özel gününü geleneksel ve modern dokunuşlarla kutlayın. Zarif tasarımlar ve pratik özelliklerle merasiminizi planlayın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-blue-500 to-sky-500 border-0 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Sünnet Davetiyeni Yap
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Önizleme -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Kraliyet Düzeyinde <span class='text-blue-500'>Davetiye</span></h2>
    </div>
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-blue-50 to-amber-50 dark:from-base-200 dark:to-base-300 shadow-2xl border border-blue-100 dark:border-base-content/10 overflow-hidden'>
        <div class='h-2 bg-gradient-to-r from-blue-400 via-sky-400 to-amber-400'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='text-6xl mb-2'>👑</div>
          <p class='text-blue-500 font-semibold tracking-widest text-sm uppercase'>Sünnet Merasimimize Davetlisiniz</p>
          <div class='divider divider-neutral/10 my-2'></div>
          <h3 class='text-4xl font-black text-blue-600 dark:text-blue-400'>Yusuf</h3>
          <p class='text-base-content/50 font-medium mt-2'>28 Haziran 2026 — Cumartesi</p>
          <div class='grid grid-cols-2 gap-4 mt-4 w-full'>
            <div class='bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3'>
              <div class='text-xs text-blue-400 font-medium'>Merasim</div>
              <div class='font-bold text-sm'>14:00 — Cami</div>
            </div>
            <div class='bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3'>
              <div class='text-xs text-amber-500 font-medium'>Davet</div>
              <div class='font-bold text-sm'>18:00 — Salon</div>
            </div>
          </div>
          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-blue-500 border-0 text-white hover:bg-blue-600'>Katılacağım 🎉</button>
            <button class='btn btn-sm btn-outline border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500'>Konum</button>
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
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Merasiminizi <span class='text-blue-500'>Özel Kılan</span> Detaylar</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300'>
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
<section class='py-24 bg-gradient-to-r from-blue-500 via-sky-500 to-amber-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🏰</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Şehzadenizi Kutlayın!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Sünnet merasimi davetiyenizi şimdi oluşturun.</p>
    <a href='/order' class='btn btn-lg bg-white text-blue-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Başla
      <Crown class='w-5 h-5' />
    </a>
  </div>
</section>
