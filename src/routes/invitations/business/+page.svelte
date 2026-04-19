<script lang='ts'>
  import { Briefcase, ChartBar, Shield, Globe, Clock, Users, Award, ChevronRight, Zap } from '@lucide/svelte'

  const features = [
    { icon: Shield, title: 'Kurumsal Güvenlik', desc: 'KVKK uyumlu altyapı ile konuk bilgilerini güvenle saklayın.' },
    { icon: ChartBar, title: 'Detaylı Analitik', desc: 'Davetiye görüntülenme, tıklama ve katılım oranlarını raporlayın.' },
    { icon: Globe, title: 'Özel Alan Adı', desc: 'Şirketinizin domain\'i ile profesyonel bir davetiye yayınlayın.' },
    { icon: Clock, title: 'Etkinlik Programı', desc: 'Konuşmacılar, oturumlar ve molalar için detaylı program ekleyin.' },
    { icon: Users, title: 'Toplu Kayıt', desc: 'Yüzlerce katılımcıyı tek panelden yönetin ve CSV ile dışa aktarın.' },
    { icon: Award, title: 'Beyaz Etiket', desc: 'Platform logomuz olmadan tamamen kendi markanız gibi görünsün.' },
  ]

  const useCases = [
    { emoji: '🏢', title: 'Lansman Etkinliği', desc: 'Yeni ürün ve hizmetlerinizi tanıtın' },
    { emoji: '📊', title: 'Fuar & Konferans', desc: 'Sektörel etkinliklerde fark yaratın' },
    { emoji: '🤝', title: 'Networking', desc: 'İş bağlantılarınızı güçlendirin' },
    { emoji: '🎓', title: 'Seminer & Eğitim', desc: 'Kurumsal eğitim etkinliklerinizi planlayın' },
  ]
</script>

<svelte:head>
  <title>İş & Fuar Davetiyeleri — edavet.org</title>
  <meta name='description' content='Kurumsal etkinlikleriniz için prestijli ve profesyonel dijital davetiyeler. Analitik, KVKK uyumluluğu ve beyaz etiket desteği.' />
</svelte:head>

<!-- Hero - Premium Koyu Tema -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0f]'>
  <!-- Premium Koyu Arka Plan -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]'></div>
    <div class='absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-violet-600/10 rounded-full blur-[100px]'></div>
    <div class='absolute top-[30%] right-[30%] w-[15%] h-[15%] bg-cyan-500/5 rounded-full blur-[80px]'></div>
  </div>
  <!-- Grid Overlay -->
  <div class='absolute inset-0 z-0 opacity-[0.03]' style='background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 60px 60px;'></div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold backdrop-blur-sm'>
        <Briefcase class='w-4 h-4' />
        Kurumsal Davetiye Çözümleri
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-white'>
        İşinize
        <br />
        <span class='bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent italic'>
          Prestij Katın
        </span>
      </h1>

      <p class='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Kurumsal etkinliklerinizi yansıtan profesyonel davetiyeler. Detaylı analitik, toplu kayıt yönetimi ve beyaz etiket desteğiyle markanızı bir adım öne taşıyın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-blue-500 to-violet-500 border-0 text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all px-10'>
          <Zap class='w-5 h-5' />
          Kurumsal Teklif Al
        </a>
        <a href='/contact' class='btn btn-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 px-10 group backdrop-blur-sm'>
          İletişime Geç
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>

      <!-- Güven Logoları -->
      <div class='mt-16 flex flex-wrap justify-center gap-8 text-gray-500/60'>
        <span class='font-bold text-sm uppercase tracking-widest'>Fortune 500</span>
        <span class='font-bold text-sm uppercase tracking-widest'>ISO 27001</span>
        <span class='font-bold text-sm uppercase tracking-widest'>KVKK Uyumlu</span>
        <span class='font-bold text-sm uppercase tracking-widest'>SSL Korumalı</span>
      </div>
    </div>
  </div>
</section>

<!-- Önizleme Kartı -->
<section class='py-24 bg-[#0d0d14] relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[20%] right-[5%] w-[15%] h-[15%] bg-blue-600/5 rounded-full blur-[80px]'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>
        Profesyonel <span class='text-blue-400'>Görünüm</span>
      </h2>
      <p class='text-gray-400 text-lg max-w-xl mx-auto font-medium'>Kurumsal kimliğinizle uyumlu şık davetiyeler.</p>
    </div>
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl border border-white/10 overflow-hidden'>
        <div class='h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4'>
            <Briefcase class='w-8 h-8 text-blue-400' />
          </div>
          <p class='text-blue-400 font-semibold tracking-widest text-xs uppercase'>Davetlisiniz</p>
          <h3 class='text-3xl font-black text-white mt-2'>Tech Summit 2026</h3>
          <p class='text-gray-400 font-medium mt-2'>Geleceğin Teknolojileri Konferansı</p>
          <div class='divider before:bg-white/10 after:bg-white/10 my-4'></div>
          <div class='grid grid-cols-3 gap-4 w-full text-center'>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Tarih</div>
              <div class='text-white font-bold text-sm'>10 Ekim 2026</div>
            </div>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Saat</div>
              <div class='text-white font-bold text-sm'>09:00 - 18:00</div>
            </div>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Mekan</div>
              <div class='text-white font-bold text-sm'>Hilton İstanbul</div>
            </div>
          </div>
          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-blue-500 border-0 text-white hover:bg-blue-600'>Kayıt Ol</button>
            <button class='btn btn-sm bg-white/5 border border-white/10 text-white hover:bg-white/10'>Program</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Kullanım Alanları -->
<section class='py-24 bg-[#0a0a0f]'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>Her <span class='text-blue-400'>Etkinliğe</span> Uygun</h2>
    </div>
    <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
      {#each useCases as uc}
        <div class='card bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-4 group-hover:scale-125 transition-transform'>{uc.emoji}</div>
            <h3 class='font-bold text-white text-lg'>{uc.title}</h3>
            <p class='text-gray-500 text-sm font-medium'>{uc.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Özellikler -->
<section class='py-24 bg-[#0d0d14]'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>Kurumsal <span class='text-blue-400'>Özellikler</span></h2>
      <p class='text-gray-400 text-lg max-w-xl mx-auto font-medium'>İşletmenizin ihtiyaç duyduğu her şey.</p>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-white/[0.03] border border-white/10 hover:border-blue-500/20 transition-all group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300'>
              <f.icon class='w-7 h-7' />
            </div>
            <h3 class='text-xl font-bold mb-2 text-white'>{f.title}</h3>
            <p class='text-gray-400 font-medium leading-relaxed'>{f.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class='py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-20%] right-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6'>
      <Briefcase class='w-8 h-8' />
    </div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>İşinizi Büyütmeye Hazır Mısınız?</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Kurumsal etkinlikleriniz için özel teklif alın.</p>
    <a href='/contact' class='btn btn-lg bg-white text-blue-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Teklif İste
      <ChevronRight class='w-5 h-5' />
    </a>
  </div>
</section>
