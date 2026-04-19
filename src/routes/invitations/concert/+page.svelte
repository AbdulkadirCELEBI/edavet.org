<script lang='ts'>
  import { Music, Mic, Ticket, MapPin, Clock, Volume2, Radio, ChevronRight, Zap } from '@lucide/svelte'

  const features = [
    { icon: Music, title: 'Müzik Entegrasyonu', desc: 'Sanatçının hit şarkısını doğrudan davetiye arka planında çalın.' },
    { icon: Ticket, title: 'Bilet & QR Kod', desc: 'Her davetiye için benzersiz QR kod oluşturun, giriş kontrolünü kolaylaştırın.' },
    { icon: Mic, title: 'Sanatçı Profili', desc: 'Sahne alacak sanatçıların biyografisi ve fotoğraflarını sergileyin.' },
    { icon: MapPin, title: 'Mekan Haritası', desc: 'Konser alanı, otopark ve giriş noktalarını haritada gösterin.' },
    { icon: Clock, title: 'Sahne Programı', desc: 'Açılış, ara ve kapanış saatlerini detaylı program ile paylaşın.' },
    { icon: Volume2, title: 'Ses Efektleri', desc: 'Davetiye açılışında heyecan verici ses efektleriyle etki yaratın.' },
  ]

  const genres = [
    { emoji: '🎸', label: 'Rock', color: 'from-red-500 to-orange-500' },
    { emoji: '🎵', label: 'Pop', color: 'from-pink-500 to-violet-500' },
    { emoji: '🎹', label: 'Klasik', color: 'from-amber-500 to-yellow-500' },
    { emoji: '🎤', label: 'Hip-Hop', color: 'from-green-500 to-cyan-500' },
  ]
</script>

<svelte:head>
  <title>Konser Davetiyesi — edavet.org</title>
  <meta name='description' content='Dinamik ve ritmik konser davetiyeleri. Müzik entegrasyonu, QR bilet, sanatçı profili ve sahne programı ile heyecanı doruğa çıkarın.' />
</svelte:head>

<!-- Hero - Konser Teması (Koyu, Neon) -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a12]'>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-15%] left-[10%] w-[35%] h-[50%] bg-purple-600/15 rounded-full blur-[100px]'></div>
    <div class='absolute bottom-[-15%] right-[10%] w-[35%] h-[50%] bg-pink-600/15 rounded-full blur-[100px]'></div>
    <div class='absolute top-[50%] left-[50%] w-[20%] h-[20%] bg-cyan-500/10 rounded-full blur-[80px]'></div>
  </div>
  <!-- Equalizer Line -->
  <div class='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 z-0'></div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold backdrop-blur-sm'>
        <Radio class='w-4 h-4' />
        Konser Davetiyesi
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-white'>
        Sahneyi
        <br />
        <span class='bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent italic'>
          Siz Kurun 🎶
        </span>
      </h1>

      <p class='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Konserinizi unutulmaz kılacak dinamik davetiyeler. Müzik, ışık efektleri ve QR bilet ile misafirlerinizi heyecanlandırın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all px-10'>
          <Zap class='w-5 h-5' />
          Konser Davetiyeni Yap
        </a>
        <a href='/pricing' class='btn btn-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 px-10 group backdrop-blur-sm'>
          Fiyatları Gör
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Önizleme -->
<section class='py-24 bg-[#0d0d16]'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>Davetiyeniz Böyle <span class='text-purple-400'>Çalacak</span></h2>
    </div>
    <div class='max-w-lg mx-auto'>
      <div class='card bg-gradient-to-b from-gray-900 to-[#0a0a12] shadow-2xl border border-purple-500/20 overflow-hidden'>
        <div class='h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500'></div>
        <div class='card-body items-center text-center p-10'>
          <div class='text-6xl mb-2'>🎤</div>
          <p class='text-purple-400 font-semibold tracking-widest text-xs uppercase'>Canlı Konser</p>
          <h3 class='text-3xl font-black text-white mt-2'>Yıldız Tilbe</h3>
          <p class='text-gray-400 font-medium mt-1'>Yaz Konserleri Serisi 2026</p>
          <div class='divider before:bg-white/10 after:bg-white/10 my-4'></div>
          <div class='grid grid-cols-3 gap-4 w-full'>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Tarih</div>
              <div class='text-white font-bold text-sm'>15 Temmuz</div>
            </div>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Kapı</div>
              <div class='text-white font-bold text-sm'>20:00</div>
            </div>
            <div>
              <div class='text-xs text-gray-500 uppercase tracking-wider font-medium'>Mekan</div>
              <div class='text-white font-bold text-sm'>Harbiye Amfi</div>
            </div>
          </div>
          <div class='flex gap-3 mt-8'>
            <button class='btn btn-sm bg-purple-500 border-0 text-white hover:bg-purple-600'>Biletimi Al 🎟️</button>
            <button class='btn btn-sm bg-white/5 border border-white/10 text-white hover:bg-white/10'>Konum</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Türler -->
<section class='py-24 bg-[#0a0a12]'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>Her <span class='text-purple-400'>Müzik Türüne</span> Uygun</h2>
    </div>
    <div class='grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto'>
      {#each genres as g}
        <div class='card bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-8'>
            <div class='text-5xl mb-3 group-hover:scale-125 transition-transform'>{g.emoji}</div>
            <div class='badge bg-gradient-to-r {g.color} text-white border-0 font-bold py-3 px-4'>{g.label}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Özellikler -->
<section class='py-24 bg-[#0d0d16]'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>Sahneyi <span class='text-purple-400'>Aydınlatan</span> Özellikler</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each features as f}
        <div class='card bg-white/[0.03] border border-white/10 hover:border-purple-500/20 transition-all group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300'>
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
<section class='py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🎶</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Sahne Sizi Bekliyor!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Konseriniz için etkileyici bir davetiye oluşturun.</p>
    <a href='/order' class='btn btn-lg bg-white text-purple-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Hemen Oluştur
      <Music class='w-5 h-5' />
    </a>
  </div>
</section>
