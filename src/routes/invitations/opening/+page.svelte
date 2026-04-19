<script lang='ts'>
  import { Scissors, MapPin, Camera, Clock, Users, Award, Store, ChevronRight, Sparkles } from '@lucide/svelte'

  const features = [
    { icon: Scissors, title: 'Kurdele Kesme Animasyonu', desc: 'Davetiye açılışında göz alıcı bir kurdele kesme animasyonu ile başlayın.' },
    { icon: Camera, title: 'Mekan Fotoğrafları', desc: 'Yeni mekanınızın fotoğraflarını misafirlerinize önceden gösterin.' },
    { icon: Clock, title: 'Açılış Geri Sayımı', desc: 'Büyük açılışa kalan süreyi canlı sayaçla heyecan verici kılın.' },
    { icon: MapPin, title: 'Mekan Konumu', desc: 'Açılış adresini ve otopark bilgisini harita üzerinde paylaşın.' },
    { icon: Users, title: 'Davetli Yönetimi', desc: 'VIP ve genel davetli listelerini ayrı ayrı yönetin.' },
    { icon: Award, title: 'Marka Kimliği', desc: 'Logo, renk paleti ve kurumsal kimliğinizi davetiyeye yansıtın.' },
  ]

  const openingTypes = [
    { emoji: '🏪', label: 'Mağaza Açılışı' },
    { emoji: '🏢', label: 'Ofis Açılışı' },
    { emoji: '🍽️', label: 'Restoran Açılışı' },
    { emoji: '🏥', label: 'Klinik Açılışı' },
  ]
</script>

<svelte:head>
  <title>Açılış Davetiyeleri — edavet.org</title>
  <meta name='description' content='Mağaza, ofis, restoran ve klinik açılışlarınız için profesyonel dijital davetiyeler. Kurdele kesme animasyonu ve marka kimliği desteği.' />
</svelte:head>

<!-- Hero -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-red-200/30 dark:bg-red-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[12%] left-[8%] text-6xl animate-pulse'>✂️</div>
    <div class='absolute top-[22%] right-[12%] text-5xl animate-pulse' style='animation-delay: 0.5s'>🎊</div>
    <div class='absolute bottom-[20%] left-[18%] text-4xl animate-pulse' style='animation-delay: 1s'>🏪</div>
    <div class='absolute bottom-[30%] right-[22%] text-5xl animate-pulse' style='animation-delay: 1.5s'>🎉</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Scissors class='w-4 h-4' />
        Açılış Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Yeni Başlangıcınızı
        <br />
        <span class='bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent italic'>
          Kutlayın! ✂️
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        İşletmenizin kapılarını büyük bir etki yaratarak açın. Profesyonel açılış davetiyeleri ile misafirlerinizi etkileyici bir deneyime davet edin.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Açılış Davetiyeni Yap
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Açılış Türleri -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Her <span class='text-orange-500'>Açılış</span> İçin</h2>
    </div>
    <div class='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto'>
      {#each openingTypes as type}
        <div class='card bg-base-200/50 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-3 group-hover:scale-125 transition-transform'>{type.emoji}</div>
            <h3 class='font-bold text-sm'>{type.label}</h3>
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
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Açılışınızı <span class='text-orange-500'>Özel Kılın</span></h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300'>
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
<section class='py-24 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🎊</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Kapılarınızı Büyük Açın!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Açılış davetiyenizi şimdi oluşturun ve fark yaratın.</p>
    <a href='/order' class='btn btn-lg bg-white text-orange-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <Store class='w-5 h-5' />
    </a>
  </div>
</section>
