<script lang='ts'>
  import { Heart, MapPin, Camera, Clock, Users, Music, Star, ChevronRight, Sparkles } from '@lucide/svelte'

  const features = [
    { icon: Heart, title: 'Romantik Tasarımlar', desc: 'Çiftinizin ruhunu yansıtan zarif ve romantik şablonlar arasından seçin.' },
    { icon: Camera, title: 'Fotoğraf Galerisi', desc: 'Nişan ve düğün fotoğraflarınızı şık bir galeriyle misafirlerinize sunun.' },
    { icon: Clock, title: 'Geri Sayım', desc: 'Büyük güne kalan süreyi canlı geri sayım ile misafirlerinize gösterin.' },
    { icon: MapPin, title: 'Mekan Haritası', desc: 'Düğün salonu ve nikah mekanı konumlarını tek tıkla paylaşın.' },
    { icon: Users, title: 'Akıllı LCV', desc: 'Misafirlerinizin katılım durumunu anlık olarak takip edin.' },
    { icon: Music, title: 'Düğün Müziği', desc: 'Davetiyenize özel romantik bir arka plan müziği ekleyin.' },
  ]

  const templates = [
    { name: 'Klasik Elegans', emoji: '🌹', style: 'Zarif tipografi, altın detaylar' },
    { name: 'Bohem Rüya', emoji: '🌿', style: 'Doğa teması, suluboya çiçekler' },
    { name: 'Modern Minimal', emoji: '💎', style: 'Sade çizgiler, temiz tasarım' },
    { name: 'Romantik Gül', emoji: '🌸', style: 'Pembe tonlar, gül motifleri' },
  ]

  const steps = [
    { num: '01', title: 'Şablonunuzu Seçin', desc: 'Düğün temanıza uygun onlarca şablon arasından favorinizi belirleyin.' },
    { num: '02', title: 'Bilgilerinizi Girin', desc: 'Tarih, mekan, isimler ve fotoğraflarınızı ekleyin.' },
    { num: '03', title: 'Kişiselleştirin', desc: 'Renkleri, yazı tiplerini ve müziği kendi zevkinize göre düzenleyin.' },
    { num: '04', title: 'Paylaşın', desc: 'Tek tıkla WhatsApp, Instagram ve diğer platformlarda paylaşın.' },
  ]
</script>

<svelte:head>
  <title>Düğün & Nikah Davetiyesi — edavet.org</title>
  <meta name='description' content='En mutlu gününüz için romantik ve şık dijital düğün davetiyeleri. Geri sayım, LCV takibi, fotoğraf galerisi ve daha fazlası.' />
</svelte:head>

<!-- Hero Section - Romantik Tema -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <!-- Romantik Arka Plan -->
  <div class='absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-rose-200/30 dark:bg-rose-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-amber-200/30 dark:bg-amber-900/10 rounded-full blur-3xl'></div>
    <div class='absolute top-[40%] right-[20%] w-[20%] h-[20%] bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl'></div>
  </div>

  <!-- Dekoratif Kalpler -->
  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[15%] left-[10%] text-6xl animate-pulse'>💕</div>
    <div class='absolute top-[25%] right-[15%] text-4xl animate-pulse' style='animation-delay: 0.5s'>💍</div>
    <div class='absolute bottom-[20%] left-[20%] text-5xl animate-pulse' style='animation-delay: 1s'>🌹</div>
    <div class='absolute bottom-[30%] right-[25%] text-3xl animate-pulse' style='animation-delay: 1.5s'>✨</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Heart class='w-4 h-4 fill-current' />
        Dijital Düğün Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Aşkınızı Anlatan
        <br />
        <span class='bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent italic'>
          Mükemmel Davetiye
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Düğününüzün büyüsünü misafirlerinize hissettirin. Romantik tasarımlar, canlı geri sayım ve akıllı LCV ile hayalinizdeki davetiyeyi oluşturun.
      </p>

      <!-- Geri Sayım Önizleme -->
      <div class='flex justify-center gap-4 mb-10'>
        {#each [
          { val: '124', label: 'Gün' },
          { val: '08', label: 'Saat' },
          { val: '42', label: 'Dakika' },
          { val: '17', label: 'Saniye' },
        ] as item}
          <div class='bg-white/80 dark:bg-base-200/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-100 dark:border-base-content/10 min-w-[80px]'>
            <div class='text-3xl md:text-4xl font-black text-rose-600 dark:text-rose-400'>{item.val}</div>
            <div class='text-xs font-medium text-base-content/50 uppercase tracking-wider'>{item.label}</div>
          </div>
        {/each}
      </div>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-rose-500 to-pink-500 border-0 text-white shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Düğün Davetiyeni Oluştur
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Gelin & Damat Simülasyonu -->
<section class='py-24 bg-base-100 relative overflow-hidden'>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[10%] right-[5%] w-[20%] h-[30%] bg-rose-100/50 dark:bg-rose-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
        Düğün Davetiyeniz Böyle <span class='text-rose-500'>Görünecek</span>
      </h2>
      <p class='text-base-content/60 text-lg max-w-2xl mx-auto font-medium'>Misafirleriniz davetiyenizi açtığında büyülenecek.</p>
    </div>

    <!-- Davetiye Önizleme Kartı -->
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-rose-50 to-amber-50 dark:from-base-200 dark:to-base-300 shadow-2xl border border-rose-100 dark:border-base-content/10 overflow-hidden'>
        <!-- Üst Süsleme -->
        <div class='h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='text-6xl mb-4'>💒</div>
          <p class='text-rose-500 font-semibold tracking-widest text-sm uppercase'>Düğünümüze Davetlisiniz</p>
          <div class='divider divider-neutral/10 my-2'></div>
          <h3 class='text-4xl font-black tracking-tight'>
            <span class='text-rose-600 dark:text-rose-400'>Elif</span>
            <span class='text-base-content/30 mx-2'>&</span>
            <span class='text-rose-600 dark:text-rose-400'>Murat</span>
          </h3>
          <p class='text-base-content/50 font-medium mt-2'>15 Haziran 2026 — Cumartesi, 18:00</p>
          <p class='text-base-content/40 text-sm font-medium'>Grand Bella Düğün Salonu, İstanbul</p>

          <!-- Mini Geri Sayım -->
          <div class='flex gap-3 mt-6'>
            {#each ['124 Gün', '08 Saat', '42 Dk'] as t}
              <div class='bg-white/80 dark:bg-base-100/50 rounded-xl px-4 py-2 text-xs font-bold text-rose-600 dark:text-rose-400 shadow-sm'>
                {t}
              </div>
            {/each}
          </div>

          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-rose-500 border-0 text-white hover:bg-rose-600'>Katılacağım 💍</button>
            <button class='btn btn-sm btn-outline border-rose-300 text-rose-500 hover:bg-rose-500 hover:text-white hover:border-rose-500'>Konum</button>
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
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Düğün Davetiyenizde <span class='text-rose-500'>Neler Var?</span></h2>
      <p class='text-base-content/60 text-lg max-w-xl mx-auto font-medium'>Etkinliğinizi mükemmel kılacak tüm özellikler.</p>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mb-4 text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300'>
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

<!-- Şablonlar -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Popüler Düğün <span class='text-rose-500'>Şablonları</span></h2>
      <p class='text-base-content/60 text-lg max-w-xl mx-auto font-medium'>Her tarzdan çift için özenle hazırlanmış tasarımlar.</p>
    </div>
    <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
      {#each templates as t}
        <div class='card bg-gradient-to-b from-rose-50 to-white dark:from-base-200 dark:to-base-300 shadow-lg hover:shadow-xl transition-all border border-rose-100 dark:border-base-content/10 group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-4 group-hover:scale-125 transition-transform'>{t.emoji}</div>
            <h3 class='font-bold text-lg'>{t.name}</h3>
            <p class='text-base-content/50 text-sm font-medium'>{t.style}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Nasıl Çalışır -->
<section class='py-24 bg-base-200/50'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'><span class='text-rose-500'>4 Adımda</span> Düğün Davetiyeniz Hazır</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto'>
      {#each steps as step}
        <div class='text-center group'>
          <div class='text-5xl font-black text-rose-200 dark:text-rose-900/50 mb-4 group-hover:text-rose-400 transition-colors'>{step.num}</div>
          <h3 class='text-lg font-bold mb-2'>{step.title}</h3>
          <p class='text-base-content/60 text-sm font-medium'>{step.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class='py-24 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-20%] right-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>💍</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Hazır Mısınız?</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>En mutlu gününüz için mükemmel davetiyenizi şimdi oluşturun.</p>
    <a href='/order' class='btn btn-lg bg-white text-rose-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Başla
      <Heart class='w-5 h-5 fill-current' />
    </a>
  </div>
</section>
