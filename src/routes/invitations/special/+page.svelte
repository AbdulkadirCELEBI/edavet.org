<script lang='ts'>
  import { Gem, Wand, Camera, MapPin, Users, Palette, Clock, ChevronRight, Sparkles } from '@lucide/svelte'

  const features = [
    { icon: Wand, title: 'Sıfırdan Tasarım', desc: 'Tamamen özgün bir davetiye oluşturmak için sınırsız kişiselleştirme.' },
    { icon: Palette, title: 'Renk & Font Seçimi', desc: 'Etkinliğinizin ruhuna uygun renk paleti ve yazı tipi belirleyin.' },
    { icon: Camera, title: 'Zengin Medya', desc: 'Fotoğraf, video ve GIF ekleyerek davetiyenizi hayata geçirin.' },
    { icon: MapPin, title: 'Çoklu Konum', desc: 'Birden fazla mekan veya buluşma noktası ekleyin.' },
    { icon: Clock, title: 'Hatırlatıcılar', desc: 'Etkinlik öncesi otomatik hatırlatma mesajları gönderin.' },
    { icon: Users, title: 'Detaylı LCV', desc: 'Kişi sayısı, yemek tercihi ve özel notlarla gelişmiş RSVP.' },
  ]

  const occasions = [
    { emoji: '🥂', label: 'Yılbaşı Partisi' },
    { emoji: '🎓', label: 'Mezuniyet' },
    { emoji: '💍', label: 'Nişan Töreni' },
    { emoji: '🏡', label: 'Ev Isıtma' },
    { emoji: '🎭', label: 'Tematik Parti' },
    { emoji: '🌟', label: 'Özel Kutlama' },
  ]
</script>

<svelte:head>
  <title>Özel Davetler — edavet.org</title>
  <meta name='description' content='Nişan, mezuniyet, yılbaşı ve diğer özel etkinlikleriniz için tamamen kişiselleştirilebilir dijital davetiyeler.' />
</svelte:head>

<!-- Hero - Lüks & Elegant -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-fuchsia-200/30 dark:bg-fuchsia-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[12%] left-[8%] text-6xl animate-pulse'>💎</div>
    <div class='absolute top-[25%] right-[15%] text-5xl animate-pulse' style='animation-delay: 0.5s'>🥂</div>
    <div class='absolute bottom-[18%] left-[20%] text-4xl animate-pulse' style='animation-delay: 1s'>✨</div>
    <div class='absolute bottom-[28%] right-[25%] text-5xl animate-pulse' style='animation-delay: 1.5s'>🌟</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Gem class='w-4 h-4' />
        Özel Davetler
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Her An
        <br />
        <span class='bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent italic'>
          Özel Olabilir ✨
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Nişan, mezuniyet, yılbaşı veya herhangi bir özel anınız için tamamen size özel davetiyeler oluşturun. Sınır hayal gücünüz.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 text-white shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Özel Davetiyeni Yap
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Etkinlik Türleri -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Her <span class='text-violet-500'>Özel An</span> İçin</h2>
    </div>
    <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto'>
      {#each occasions as o}
        <div class='card bg-base-200/50 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-6'>
            <div class='text-4xl mb-2 group-hover:scale-125 transition-transform'>{o.emoji}</div>
            <h3 class='font-bold text-xs'>{o.label}</h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Özellikler -->
<section class='py-24 bg-base-200/50'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Sınırsız <span class='text-violet-500'>Kişiselleştirme</span></h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
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
<section class='py-24 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>💎</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Anınızı Ölümsüzleştirin</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Özel gününüz için mükemmel davetiyeyi hemen oluşturun.</p>
    <a href='/order' class='btn btn-lg bg-white text-violet-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <Gem class='w-5 h-5' />
    </a>
  </div>
</section>
