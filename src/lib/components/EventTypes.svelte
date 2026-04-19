<script lang='ts'>
  import { ArrowRight, Sparkles } from '@lucide/svelte'

  const events = [
    {
      title: 'Düğün & Nişan',
      desc: 'Hayatınızın en özel gününü hikayeleştiren, RSVP ve fotoğraf galerisi içeren zarif bir dijital evren.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      badges: ['RSVP', 'Galeri', 'Müzik'],
      theme: 'border-pink-100 dark:border-pink-900/30 shadow-pink-500/5',
    },
    {
      title: 'Doğum Günü',
      desc: 'Küçükler ve büyükler için eğlenceli, konukların anında fotoğraf yükleyebildiği etkileşimli kutlama sayfaları.',
      image: 'https://images.unsplash.com/photo-1530103862676-fa3902b79491?q=80&w=800&auto=format&fit=crop',
      badges: ['Fotoğraf Yükleme', 'Geri Sayım'],
      theme: 'border-blue-100 dark:border-blue-900/30 shadow-blue-500/5',
    },
    {
      title: 'Kurumsal & Lansman',
      desc: 'Markanızın prestijini yansıtan, QR kod girişli ve LCV takibi yapabilen profesyonel organizasyon siteleri.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      badges: ['QR Kod', 'LCV', 'Profesyonel'],
      theme: 'border-indigo-100 dark:border-indigo-900/30 shadow-indigo-500/5',
    },
    {
      title: 'Baby Shower',
      desc: 'Yeni bir hayata merhaba derken, tüm detayların ve katılım durumunun şık bir şekilde paylaşıldığı zarif yapılar.',
      image: 'https://images.unsplash.com/photo-1519611535142-4c3f44243c4a?q=80&w=800&auto=format&fit=crop',
      badges: ['Konsept', 'Mobil Uyum'],
      theme: 'border-amber-100 dark:border-amber-900/30 shadow-amber-500/5',
    },
    {
      title: 'Sünnet Merasimi',
      desc: 'Gelenekleri dijitalin kolaylığı ile buluşturan, harita ve video paylaşımı içeren özel hatırlatıcı sayfalar.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
      badges: ['Harita', 'Hızlı Paylaşım'],
      theme: 'border-emerald-100 dark:border-emerald-900/30 shadow-emerald-500/5',
    },
    {
      title: 'Özel Davet & Gala',
      desc: 'Sınırlı sayıda davetliye özel, prestijli ve çoklu dil seçenekleriyle hazırlanan VIP dijital deneyimler.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08759df9a73?q=80&w=800&auto=format&fit=crop',
      badges: ['Çoklu Dil', 'Özel Alan Adı'],
      theme: 'border-purple-100 dark:border-purple-900/30 shadow-purple-500/5',
    },
  ]
</script>

<section class='py-24 bg-base-100 relative overflow-hidden' id='use-cases'>
  <!-- Soft background decoration -->
  <div class='absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mt-24 pointer-events-none'></div>
  <div class='absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mb-24 pointer-events-none'></div>

  <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

    <!-- Section Header -->
    <div class='max-w-3xl mx-auto text-center mb-16 md:mb-20'>
      <div class='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6'>
        <Sparkles class='w-4 h-4' /> Her Etkinlik İçin Özel
      </div>
      <h2 class='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-linear-to-b from-base-content to-base-content/70 bg-clip-text'>
        Profesyonel Dijital Davet Deneyimi
      </h2>
      <p class='text-lg md:text-xl text-base-content/60 leading-relaxed'>
        Sadece bir davetiye değil, etkinliğinizin ruhunu yansıtan etkileşimli bir mini web sitesi hazırlıyoruz. Her konsept için modern, şık ve sofistike çözümlerle yanınızdayız.
      </p>
    </div>

    <!-- Events Grid -->
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {#each events as event}
        <div class='group card bg-base-100 rounded-4xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden {event.theme}'>

          <!-- Image Container -->
          <div class='h-64 relative overflow-hidden'>
            <img
              src={event.image}
              alt={event.title}
              class='w-full h-full object-cover grayscale-25 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
            />
            <div class='absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-bottom p-6 opacity-0 group-hover:opacity-100 transition-opacity'>
              <div class='text-white text-xs font-medium uppercase tracking-[0.2em]'>Konsept Tasarım</div>
            </div>
          </div>

          <!-- Content -->
          <div class='card-body p-8'>
            <div class='flex flex-wrap gap-2 mb-4'>
              {#each event.badges as badge}
                <span class='px-3 py-1 bg-base-200 text-base-content/70 text-[10px] font-black uppercase tracking-wider rounded-md'>
                  {badge}
                </span>
              {/each}
            </div>

            <h3 class='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>
              {event.title}
            </h3>

            <p class='text-base-content/60 text-sm leading-relaxed mb-6'>
              {event.desc}
            </p>

            <div class='divider opacity-10 my-0'></div>

            <div class='pt-4 flex items-center justify-between group/link'>
              <span class='text-xs font-bold text-base-content/40 transition-colors group-hover:text-base-content'>Hizmet Detayı</span>
              <div class='w-8 h-8 rounded-full bg-base-200 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-content transition-all transform group-hover/link:rotate-45'>
                <ArrowRight class='w-4 h-4' />
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom Action -->
    <div class='mt-20 text-center'>
      <div class='p-8 rounded-[2.5rem] bg-base-200/50 border border-base-200 inline-block'>
        <div class='flex flex-col md:flex-row items-center gap-8'>
          <p class='text-base-content font-medium'>Farklı bir etkinlik türü mü planlıyorsunuz?</p>
          <a href='/contact' class='btn btn-primary rounded-2xl px-8 shadow-xl shadow-primary/20'>Bizimle Paylaşın</a>
        </div>
      </div>
    </div>

  </div>
</section>
