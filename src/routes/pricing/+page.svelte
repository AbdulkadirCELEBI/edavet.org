<script lang='ts'>
  import {
    Calendar,
    Check,
    Globe,
    HelpCircle,
    Image as ImageIcon,
    MapPin,
    MessageSquare,
    Star,
    UploadCloud,
    X,
  } from '@lucide/svelte'
  import { fade, slide } from 'svelte/transition'

  const packages = [
    {
      name: 'Başlangıç',
      desc: 'QR Kodlu dijital anı albümü ve hızla paylaşılan şık etkinlik sayfası.',
      price: '1.250',
      isPopular: false,
      features: [
        'Size Özel QR Kod & Link',
        'Davetli Fotoğraf / Video Yükleme',
        'Anı & Misafir Defteri Alanı',
        'Harita ve Etkinlik Detayları',
        '500 Fotoğraflık Galeri',
        '1 Adet Revize Hakkı',
      ],
      disabled: [
        'RSVP / LCV Formu',
        'Özel Alan Adı (Domain)',
        'Çoklu Dil Desteği',
      ],
      cta: 'Başlat',
      color: 'bg-base-200',
    },
    {
      name: 'Standart',
      desc: 'LCV (RSVP) yönetimi ve genişletilmiş özellikleri ile favori paketimiz.',
      price: '2.450',
      isPopular: true,
      features: [
        'Tüm Başlangıç Özellikleri',
        'RSVP / LCV Formu',
        'Özel Müzik & Geri Sayım',
        '1000 Fotoğraflık Galeri',
        '3 Adet Revize Hakkı',
      ],
      disabled: [
        'Özel Alan Adı (Domain)',
        'Çoklu Dil Desteği',
      ],
      cta: 'Hemen Başla',
      color: 'bg-primary text-primary-content',
    },
    {
      name: 'Premium',
      desc: 'Unutulmaz ve tamamen interaktif bir deneyim.',
      price: '4.950',
      isPopular: false,
      features: [
        'Tüm Standart Özellikleri',
        'Davetli Fotoğraf Yükleme Alanı',
        'Sınırsız Fotoğraf Galerisi',
        'Çoklu Dil Desteği (2 Dil)',
        'Özel Alan Adı (.com/.net)',
        'VIP Öncelikli Destek',
        'Sınırsız Revize Hakkı',
      ],
      disabled: [],
      cta: 'Premium Seç',
      color: 'bg-secondary text-secondary-content',
    },
  ]

  const featuresList = [
    {
      icon: Calendar,
      title: 'Etkinlik Detayları',
      desc: 'Takvime ekleme butonu ve canlı geri sayım aracı.',
    },
    {
      icon: MapPin,
      title: 'Google Haritalar',
      desc: 'Konuklarınız için tek tıkla yol tarifi alma imkanı.',
    },
    {
      icon: MessageSquare,
      title: 'RSVP (LCV Sistemi)',
      desc: 'Kimlerin katılacağını dijital ortamda anlık takip edin.',
    },
    {
      icon: ImageIcon,
      title: 'Fotoğraf Galerisi',
      desc: 'En güzel anılarınızı şık bir galeri ile sergileyin.',
    },
    {
      icon: UploadCloud,
      title: 'Davetli Yüklemeleri',
      desc: 'Misafirlerinizin etkinlik fotoğraflarını yükleyebileceği özel alan.',
    },
    {
      icon: Globe,
      title: 'Çoklu Dil ve Domain',
      desc: 'Özel alan adı ve yurt dışı misafirleri için dil seçenekleri.',
    },
  ]

  const faqs = [
    { q: 'Teslim süresi ne kadar?', a: 'Seçtiğiniz pakete göre değişmekle birlikte, standart tasarımlarımız genellikle 48 saat içinde, özel tasarımlar ise 4 iş günü içerisinde teslim edilir.' },
    { q: 'Tasarım bana özel mi?', a: 'Evet, seçtiğiniz konsepte uygun renk, font ve görsellerle tamamen size özel hale getirilir.' },
    { q: 'Sonradan değişiklik (revize) yapılabilir mi?', a: 'Paket türünüze göre belirlenen revize hakkınız bulunmaktadır. Metin, tarih veya görsel değişikliklerini bizlere iletebilirsiniz.' },
    { q: 'Davetliler nasıl fotoğraf yükleyecek?', a: 'Premium paketimizde, sitenizde misafirlerinize özel bir buton bulunur. Bu butona tıklayarak diledikleri cihazdan fotoğraflarını ortak galerinize yükleyebilirler.' },
    { q: 'Harita ve konum eklenebilir mi?', a: 'Evet, tüm paketlerimizde Google Maps entegrasyonu standart olarak sunulmaktadır.' },
  ]

  let openFaq = $state<number | null>(0)

</script>

<svelte:head>
  <title>Ücretler ve Paketler | edavet.org</title>
  <meta name='description' content='Sadece bir davetiye değil, size özel mini bir web sitesi. Bütçenize uygun e-davetiye paketlerimizi inceleyin.' />
</svelte:head>

<div class='min-h-screen bg-[#F9FAFB] dark:bg-base-200/50 pb-24' in:fade>

  <!-- Hero Section -->
  <section class='pt-24 pb-16 px-4'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20'>
        <Star class='w-4 h-4' /> Sadece bir davetiye değil, anılarınız için dijital bir ev.
      </div>
      <h1 class='text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-base-content leading-tight'>
        Esnek ve Şeffaf Fiyatlandırma
      </h1>
      <p class='text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed'>
        İhtiyacınıza uygun olan paketi seçin. Her paket, misafirlerinizi etkileyecek ve organizasyonunuzu kolaylaştıracak özel bir "mini web sitesi" olarak teslim edilir.
      </p>
    </div>
  </section>

  <!-- Package Cards -->
  <section class='px-4 max-w-7xl mx-auto mb-24'>
    <div class='grid md:grid-cols-3 gap-8 items-start'>
      {#each packages as pkg}
        <div class="card bg-base-100 shadow-xl border border-base-200 relative transition-transform duration-300 hover:-translate-y-2 {pkg.isPopular ? 'md:-mt-8 shadow-primary/20 ring-2 ring-primary' : ''}">
          {#if pkg.isPopular}
            <div class='absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center'>
              <span class='badge badge-primary font-bold shadow-lg py-3 px-6 uppercase tracking-wider text-xs'>En Popüler Tercih</span>
            </div>
          {/if}

          <div class='card-body p-8 md:p-10'>
            <h3 class='text-2xl font-bold mb-2'>{pkg.name}</h3>
            <p class='text-sm text-base-content/60 h-10 mb-4'>{pkg.desc}</p>

            <div class='mb-8 flex items-end gap-1'>
              <span class='text-4xl font-extrabold tracking-tight text-base-content'>₺{pkg.price}</span>
            </div>

            <a href='/order?type={pkg.name}' class="btn btn-block rounded-2xl mb-8 font-bold text-lg {pkg.isPopular ? 'btn-primary shadow-lg shadow-primary/30' : 'btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-transparent'}">
              {pkg.cta}
            </a>

            <div class='space-y-4 grow'>
              {#each pkg.features as feature}
                <div class='flex items-start gap-3'>
                  <div class='bg-success/10 text-success rounded-full p-0.5 shrink-0 mt-0.5'>
                    <Check class='w-4 h-4' />
                  </div>
                  <span class='text-sm font-medium'>{feature}</span>
                </div>
              {/each}

              {#if pkg.disabled.length > 0}
                <div class='divider my-2 opacity-30'></div>
                {#each pkg.disabled as feature}
                  <div class='flex items-start gap-3 opacity-40'>
                    <div class='bg-base-300 text-base-content rounded-full p-0.5 shrink-0 mt-0.5'>
                      <X class='w-4 h-4' />
                    </div>
                    <span class='text-sm line-through decoration-base-content/30'>{feature}</span>
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Custom Plan CTA -->
    <div class='mt-12 bg-base-100 rounded-3xl p-8 border border-base-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6'>
      <div>
        <h4 class='text-xl font-bold mb-2'>Kurumsal / Özel Konsept Tasarım</h4>
        <p class='text-base-content/60 max-w-lg text-sm'>
          Fuar, lansman veya çok özel bir düğün konseptiniz mi var? Tamamen sıfırdan tasarlanmış ve özel animasyonlarla zenginleştirilmiş projeniz için bize ulaşın.
        </p>
      </div>
      <a href='/contact' class='btn btn-neutral rounded-2xl px-8 whitespace-nowrap'>Özel Teklif Alın</a>
    </div>
  </section>

  <!-- Deep Dive: Standart Paket (Digital Album) -->
  <section class='max-w-7xl mx-auto px-4 mb-32'>
    <div class='bg-base-100 rounded-[3rem] p-8 md:p-16 border border-base-200 shadow-2xl overflow-hidden relative'>
      <div class='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl'></div>

      <div class='grid lg:grid-cols-2 gap-16 items-center border-b border-base-200 pb-16'>
        <div>
          <div class='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6'>
            Özel Etkinlik Çözümü
          </div>
          <h2 class='text-3xl md:text-5xl font-black mb-6 leading-tight'>
            Başlangıç Paketi: <span class='text-primary'>QR Kodlu Dijital Anı Albümü</span>
          </h2>
          <p class='text-lg text-base-content/60 mb-8 leading-relaxed'>
            Başlangıç paketimiz sadece bir davetiye değil; misafirlerinizle etkileşime geçebileceğiniz canlı bir etkinlik merkezidir. Hızlıca kurun, QR kodu masalara yerleştirin ve anıların kendiliğinden birikmesini izleyin.
          </p>

          <div class='grid sm:grid-cols-2 gap-6 mb-10'>
            <div class='flex items-start gap-3'>
              <div class='p-2 bg-primary/5 rounded-lg text-primary'><Star class='w-5 h-5' /></div>
              <div>
                <h4 class='font-bold text-sm'>Hızlı Kurulum</h4>
                <p class='text-xs opacity-60'>Saniyeler içinde sayfanız hazır.</p>
              </div>
            </div>
            <div class='flex items-start gap-3'>
              <div class='p-2 bg-primary/5 rounded-lg text-primary'><UploadCloud class='w-5 h-5' /></div>
              <div>
                <h4 class='font-bold text-sm'>Misafir Katkısı</h4>
                <p class='text-xs opacity-60'>Herkes fotoğraf yükleyebilir.</p>
              </div>
            </div>
          </div>

          <a href='/order?type=Başlangıç' class='btn btn-primary btn-lg rounded-2xl px-10 shadow-xl shadow-primary/20'>Başlangıç Paketini Başlat</a>
        </div>

        <div class='relative flex justify-center lg:justify-end'>
          <!-- Mock Preview representing QR/Mobile -->
          <div class='w-72 h-[500px] border-8 border-base-content/5 rounded-[3rem] bg-base-200 shadow-2xl relative overflow-hidden'>
            <div class='p-6 bg-base-100 h-full'>
              <div class='w-20 h-1.5 bg-base-300 rounded-full mx-auto mb-8'></div>
              <div class='aspect-square bg-white border-2 border-dashed border-base-300 rounded-2xl flex flex-col items-center justify-center p-4 mb-6'>
                <div class='text-xs font-bold opacity-30 mb-2 uppercase'>Örnek QR Kod</div>
                <div class='w-full h-full bg-base-content/5 rounded-lg'></div>
              </div>
              <div class='space-y-4'>
                <div class='h-4 bg-base-200 rounded-full w-3/4'></div>
                <div class='h-3 bg-base-200 rounded-full w-full'></div>
                <div class='h-3 bg-base-200 rounded-full w-5/6'></div>
                <div class='h-20 bg-primary/10 rounded-2xl w-full border border-primary/20 flex items-center justify-center'>
                  <span class='text-[10px] font-bold text-primary italic'>"Mutluluklar dileriz!"</span>
                </div>
              </div>
            </div>
          </div>
          <div class='absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 animate-bounce'>
            <div class='flex items-center gap-2'>
              <div class='p-2 bg-success/10 text-success rounded-lg'><ImageIcon class='w-5 h-5' /></div>
              <span class='text-xs font-bold'>+1 Yeni Anı!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Who is it for? -->
      <div class='pt-16'>
        <h3 class='text-2xl font-bold mb-10 text-center'>Kimler İçin Uygun?</h3>
        <div class='flex flex-wrap justify-center gap-3'>
          {#each ['Düğün & Nişan', 'Doğum Günü', 'Baby Shower', 'Sünnet Merasimi', 'Mezuniyet Balosu', 'Kurumsal Açılış', 'Özel Partiler'] as tag}
            <span class='px-6 py-2.5 bg-base-200 rounded-full text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20 cursor-default'>
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Features Showcase -->
  <section class='max-w-7xl mx-auto px-4 mb-24'>
    <div class='text-center mb-16'>
      <h2 class='text-3xl font-bold mb-4'>Davet Sitenizde Neler Olabilir?</h2>
      <p class='text-base-content/60'>Sıradan bir PDF veya resim yerine, konuklarınıza interaktif bir deneyim yaşatın.</p>
    </div>

    <div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {#each featuresList as feature}
        <div class='bg-base-100 p-8 rounded-3xl border border-base-200 hover:border-primary/20 transition-colors shadow-sm'>
          <div class='w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6'>
            <feature.icon class='w-6 h-6' />
          </div>
          <h3 class='font-bold text-xl mb-3'>{feature.title}</h3>
          <p class='text-base-content/60 text-sm leading-relaxed'>{feature.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- How It Works & FAQ Split -->
  <section class='max-w-7xl mx-auto px-4 mb-16'>
    <div class='grid lg:grid-cols-2 gap-16'>

      <!-- How it works -->
      <div>
        <h2 class='text-3xl font-bold mb-8'>Nasıl Çalışır?</h2>
        <div class='space-y-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-base-300'>

          <div class='relative flex gap-6'>
            <div class='w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30'>1</div>
            <div class='pt-2'>
              <h4 class='font-bold text-lg mb-2'>Paketinizi ve Konsepti Seçin</h4>
              <p class='text-base-content/60 text-sm'>Size en uygun paketi seçip temel bilgilerinizi ve istediğiniz konsepti bize iletin.</p>
            </div>
          </div>

          <div class='relative flex gap-6'>
            <div class='w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30'>2</div>
            <div class='pt-2'>
              <h4 class='font-bold text-lg mb-2'>İçeriklerinizi Gönderin</h4>
              <p class='text-base-content/60 text-sm'>Davetiye metni, varsa resimleriniz ve etkinlik yeri bilgilerini sisteme girin.</p>
            </div>
          </div>

          <div class='relative flex gap-6'>
            <div class='w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-primary/30'>3</div>
            <div class='pt-2'>
              <h4 class='font-bold text-lg mb-2'>Tasarım Hazırlansın</h4>
              <p class='text-base-content/60 text-sm'>Kısa süre içinde mini web siteniz kodlanıp testleri yapılır ve beğeninize sunulur.</p>
            </div>
          </div>

          <div class='relative flex gap-6'>
            <div class='w-10 h-10 rounded-full bg-success text-success-content flex items-center justify-center font-bold relative z-10 shrink-0 shadow-lg shadow-success/30'>
              <Check class='w-5 h-5' />
            </div>
            <div class='pt-2'>
              <h4 class='font-bold text-lg mb-2'>Linkinizi Paylaşın</h4>
              <p class='text-base-content/60 text-sm'>Her şey tamam! Özel linkinizi (veya QR kodunuzu) WhatsApp, Instagram üzerinden saniyeler içinde tüm sevdiklerinize ulaştırın.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- FAQ -->
      <div>
        <h2 class='text-3xl font-bold mb-8'>Sık Sorulan Sorular</h2>
        <div class='space-y-4'>
          {#each faqs as faq, i}
            <div class='border border-base-200 rounded-2xl bg-base-100 overflow-hidden transition-all duration-300'>
              <button
                class='w-full text-left px-6 py-5 font-semibold flex items-center justify-between hover:bg-base-200/50'
                onclick={() => openFaq = openFaq === i ? null : i}
              >
                <span>{faq.q}</span>
                <HelpCircle class="w-5 h-5 text-primary shrink-0 transition-transform duration-300 {openFaq === i ? 'rotate-180' : ''}" />
              </button>
              {#if openFaq === i}
                <div class='px-6 pb-5 text-sm text-base-content/70 leading-relaxed' transition:slide>
                  {faq.a}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

    </div>
  </section>

  <!-- Bottom CTA -->
  <section class='max-w-5xl mx-auto px-4 text-center mt-20'>
    <div class='bg-linear-to-br from-primary to-secondary rounded-[3rem] p-12 md:p-20 text-primary-content shadow-2xl relative overflow-hidden'>
      <!-- Decorative rings -->
      <div class='absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 border-40 border-white/10 rounded-full'></div>
      <div class='absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 border-30 border-white/10 rounded-full'></div>

      <div class='relative z-10'>
        <h2 class='text-4xl md:text-5xl font-bold mb-6'>Davetinizi Oluşturmaya Başlayın</h2>
        <p class='text-xl opacity-90 max-w-2xl mx-auto mb-10'>Hemen ücretsiz kayıt olun, tasarımlarımıza göz atın ve misafirlerinizi büyüleyecek dijital deneyimi hazırlayın.</p>
        <div class='flex flex-col sm:flex-row justify-center gap-4'>
          <a href='/register' class='btn bg-base-100 text-primary hover:bg-base-200 border-none btn-lg rounded-2xl px-10 shadow-xl'>
            Ücretsiz Kayıt Ol
          </a>
          <a href='/contact' class='btn btn-outline border-white text-white hover:bg-white/20 btn-lg rounded-2xl px-10'>
            Size Özel Teklif Alın
          </a>
        </div>
      </div>
    </div>
  </section>

</div>
