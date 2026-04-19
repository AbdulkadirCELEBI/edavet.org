<script lang='ts'>
  import { Mountain, MapPin, Users, Calendar, Compass, Camera, ChevronRight, Sparkles, Tent } from '@lucide/svelte'

  const features = [
    { icon: Mountain, title: 'Rota Planlama', desc: 'Gezinizin tüm duraklarını harita üzerinde görsel olarak planlayın.' },
    { icon: Users, title: 'Grup Yönetimi', desc: 'Kalabalık grupları kolayca yönetin, herkesin katılım durumunu takip edin.' },
    { icon: Calendar, title: 'Gün Gün Program', desc: 'Her gün için ayrı aktivite ve buluşma noktası belirleyin.' },
    { icon: Compass, title: 'Konum Paylaşımı', desc: 'Buluşma noktası, otel ve gezilecek yerleri haritada paylaşın.' },
    { icon: Camera, title: 'Anlık Fotoğraflar', desc: 'Gezi sırasında çekilen fotoğrafları ortak galeriye yükleyin.' },
    { icon: Tent, title: 'Konaklama Bilgisi', desc: 'Otel, kamp alanı veya kiralık ev bilgilerini paylaşın.' },
  ]

  const tripTypes = [
    { emoji: '🏔️', label: 'Doğa & Kamp', desc: 'Dağ, orman ve göl kenarı' },
    { emoji: '🏖️', label: 'Tatil & Plaj', desc: 'Deniz, kum ve güneş' },
    { emoji: '🏛️', label: 'Kültür Turu', desc: 'Tarihi yerler ve müzeler' },
    { emoji: '🎿', label: 'Kış Sporları', desc: 'Kayak ve snowboard' },
  ]
</script>

<svelte:head>
  <title>Gezi & Grup Etkinlikleri Davetiyesi — edavet.org</title>
  <meta name='description' content='Gezi ve grup etkinlikleriniz için pratik dijital davetiyeler. Rota planlama, grup yönetimi ve ortak fotoğraf galerisi.' />
</svelte:head>

<!-- Hero - Doğa / Macera Teması -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-emerald-200/30 dark:bg-emerald-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-teal-200/30 dark:bg-teal-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[12%] left-[8%] text-6xl animate-pulse'>🏔️</div>
    <div class='absolute top-[22%] right-[12%] text-5xl animate-pulse' style='animation-delay: 0.5s'>🌍</div>
    <div class='absolute bottom-[18%] left-[18%] text-4xl animate-pulse' style='animation-delay: 1s'>🧭</div>
    <div class='absolute bottom-[28%] right-[22%] text-5xl animate-pulse' style='animation-delay: 1.5s'>⛺</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Compass class='w-4 h-4' />
        Gezi & Grup Etkinliği
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Macera Seni
        <br />
        <span class='bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent italic'>
          Bekliyor! 🌍
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Grup gezilerinizi ve etkinliklerinizi organize etmek hiç bu kadar kolay olmamıştı. Rota planlayın, grubu yönetin ve anıları paylaşın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-emerald-500 to-teal-500 border-0 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all px-10'>
          <Sparkles class='w-5 h-5' />
          Gezi Davetiyeni Oluştur
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Gezi Türleri -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Her <span class='text-emerald-500'>Maceraya</span> Hazır</h2>
    </div>
    <div class='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto'>
      {#each tripTypes as trip}
        <div class='card bg-base-200/50 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-3 group-hover:scale-125 transition-transform'>{trip.emoji}</div>
            <h3 class='font-bold'>{trip.label}</h3>
            <p class='text-base-content/50 text-xs font-medium'>{trip.desc}</p>
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
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Geziyi <span class='text-emerald-500'>Kolaylaştıran</span> Özellikler</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-base-100 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300'>
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
<section class='py-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🧭</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Yola Çıkmaya Hazır Mısın?</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Grup gezin için mükemmel davetiyeni şimdi oluştur.</p>
    <a href='/order' class='btn btn-lg bg-white text-emerald-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <Mountain class='w-5 h-5' />
    </a>
  </div>
</section>
