<script lang='ts'>
  import { PartyPopper, Gift, Cake, Camera, Music, Users, Star, ChevronRight, Sparkles } from '@lucide/svelte'

  const features = [
    { icon: Cake, title: 'Yaş Temalı Tasarımlar', desc: '1 yaş, 18 yaş, 30 yaş — her yaşa özel eğlenceli ve renkli şablonlar.' },
    { icon: PartyPopper, title: 'Konfeti Animasyonu', desc: 'Davetiyeniz açıldığında konfeti yağmuru ile şenlik başlasın.' },
    { icon: Camera, title: 'Fotoğraf Albümü', desc: 'En sevdiğiniz anıları bir araya getirip çarpıcı bir galeri oluşturun.' },
    { icon: Gift, title: 'İstek Listesi', desc: 'Misafirlerinize hediye fikirleri sunarak sürprizi kolaylaştırın.' },
    { icon: Music, title: 'Parti Müziği', desc: 'Favori şarkınızı davetiye arka planına ekleyerek partiye start verin.' },
    { icon: Users, title: 'Katılım Takibi', desc: '"Geliyorum" veya "Gelemiyorum" yanıtlarını anlık takip edin.' },
  ]

  const ageGroups = [
    { emoji: '👶', label: '1 Yaş', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-500' },
    { emoji: '🧒', label: 'Çocuk', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500' },
    { emoji: '🎓', label: 'Genç', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500' },
    { emoji: '🎉', label: 'Yetişkin', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-500' },
  ]
</script>

<svelte:head>
  <title>Doğum Günü Davetiyesi — edavet.org</title>
  <meta name='description' content='Eğlenceli ve renkli dijital doğum günü davetiyeleri. Konfeti, müzik, fotoğraf galerisi ve istek listesi ile partinizi mükemmelleştirin.' />
</svelte:head>

<!-- Hero - Eğlenceli Tema -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-amber-200/30 dark:bg-amber-900/10 rounded-full blur-3xl'></div>
  </div>

  <!-- Süsleme -->
  <div class='absolute inset-0 z-0 overflow-hidden opacity-15'>
    <div class='absolute top-[10%] left-[8%] text-6xl animate-bounce'>🎈</div>
    <div class='absolute top-[20%] right-[12%] text-5xl animate-bounce' style='animation-delay: 0.3s'>🎂</div>
    <div class='absolute bottom-[15%] left-[15%] text-4xl animate-bounce' style='animation-delay: 0.6s'>🎁</div>
    <div class='absolute bottom-[25%] right-[20%] text-5xl animate-bounce' style='animation-delay: 0.9s'>🎊</div>
    <div class='absolute top-[50%] left-[50%] text-3xl animate-bounce' style='animation-delay: 1.2s'>⭐</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <PartyPopper class='w-4 h-4' />
        Doğum Günü Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Partiye Hazır Mısın?
        <br />
        <span class='bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 bg-clip-text text-transparent italic'>
          Kutlama Başlıyor! 🎉
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Sevdiklerinizi en eğlenceli şekilde davet edin. Renkli tasarımlar, konfeti animasyonları ve interaktif özelliklerle partinizi başlatın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-violet-500 to-pink-500 border-0 text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Parti Davetiyeni Yap
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları Gör
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Davetiye Önizleme -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Davetiyeniz Böyle <span class='text-violet-500'>Parlayacak</span></h2>
    </div>
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-violet-50 to-pink-50 dark:from-base-200 dark:to-base-300 shadow-2xl border border-violet-100 dark:border-base-content/10 overflow-hidden'>
        <div class='h-2 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='text-6xl mb-2'>🎂</div>
          <p class='text-violet-500 font-semibold tracking-widest text-sm uppercase'>Doğum Günüme Davetlisiniz!</p>
          <div class='divider divider-neutral/10 my-2'></div>
          <h3 class='text-4xl font-black text-violet-600 dark:text-violet-400'>Zeynep</h3>
          <div class='badge badge-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0 text-lg font-black px-6 py-4 my-2'>5 Yaşında! 🎈</div>
          <p class='text-base-content/50 font-medium mt-2'>22 Ağustos 2026 — Cumartesi, 14:00</p>
          <p class='text-base-content/40 text-sm font-medium'>Eğlence Bahçesi, Ankara</p>
          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-violet-500 border-0 text-white hover:bg-violet-600'>Geliyorum! 🎉</button>
            <button class='btn btn-sm btn-outline border-violet-300 text-violet-500 hover:bg-violet-500 hover:text-white hover:border-violet-500'>Konum 📍</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Yaş Grupları -->
<section class='py-24 bg-base-200/50'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Her <span class='text-violet-500'>Yaşa</span> Uygun Tasarımlar</h2>
      <p class='text-base-content/60 text-lg max-w-xl mx-auto font-medium'>1 yaştan 100 yaşa kadar herkese özel şablonlar.</p>
    </div>
    <div class='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto'>
      {#each ageGroups as group}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 cursor-pointer border border-base-content/5'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-3 group-hover:scale-125 transition-transform'>{group.emoji}</div>
            <div class='badge {group.color} font-bold border-0 py-3 px-4'>{group.label}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Özellikler -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Partinizi <span class='text-violet-500'>Özel Kılan</span> Özellikler</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-200/50 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mb-4 text-violet-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300'>
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
<section class='py-24 bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-20%] right-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🎈</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Kutlamaya Başla!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>En eğlenceli doğum günü davetiyesini şimdi oluştur.</p>
    <a href='/order' class='btn btn-lg bg-white text-violet-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <PartyPopper class='w-5 h-5' />
    </a>
  </div>
</section>
