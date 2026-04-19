<script lang='ts'>
  import { Paintbrush, Layers, Type, Palette, ImagePlus, Wand, ChevronRight, Sparkles, Eye } from '@lucide/svelte'

  const steps = [
    { num: '01', icon: Layers, title: 'Şablon veya Boş Sayfa', desc: 'Hazır şablonlardan birini seçin veya sıfırdan başlayın.' },
    { num: '02', icon: Palette, title: 'Renk & Tema', desc: 'Etkinliğinize uygun renk paleti ve tema belirleyin.' },
    { num: '03', icon: Type, title: 'İçerik & Yazılar', desc: 'Başlık, açıklama, tarih ve mekan bilgilerini girin.' },
    { num: '04', icon: ImagePlus, title: 'Medya Ekle', desc: 'Fotoğraf, video, müzik ve animasyon ekleyin.' },
    { num: '05', icon: Eye, title: 'Önizleme', desc: 'Davetiyenizi mobil ve masaüstünde kontrol edin.' },
    { num: '06', icon: Sparkles, title: 'Yayınla & Paylaş', desc: 'Tek tıkla paylaşın ve yanıtları takip edin.' },
  ]

  const tools = [
    { emoji: '🎨', label: 'Renk Seçici', desc: 'Sınırsız renk paleti' },
    { emoji: '✍️', label: 'Font Kütüphanesi', desc: '50+ Google Font' },
    { emoji: '🖼️', label: 'Medya Galerisi', desc: 'Fotoğraf, video, GIF' },
    { emoji: '🎵', label: 'Müzik Seçici', desc: 'Arka plan müziği' },
    { emoji: '✨', label: 'Animasyonlar', desc: 'Giriş ve geçiş efektleri' },
    { emoji: '📐', label: 'Düzen Araçları', desc: 'Sürükle ve bırak' },
  ]
</script>

<svelte:head>
  <title>Kendin Tasarla — edavet.org</title>
  <meta name='description' content='Hayalinizdeki davetiyeyi sıfırdan özgürce oluşturun. Sürükle-bırak editör, 50+ font, sınırsız renk ve animasyon seçenekleri.' />
</svelte:head>

<!-- Hero - Yaratıcılık Teması -->
<section class='relative min-h-[90vh] flex items-center overflow-hidden'>
  <div class='absolute inset-0 bg-gradient-to-br from-cyan-50 via-violet-50 to-fuchsia-50 dark:from-base-300 dark:via-base-200 dark:to-base-300'></div>
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-10%] left-[-5%] w-[35%] h-[45%] bg-cyan-200/30 dark:bg-cyan-900/10 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-10%] right-[-5%] w-[35%] h-[45%] bg-fuchsia-200/30 dark:bg-fuchsia-900/10 rounded-full blur-3xl'></div>
    <div class='absolute top-[40%] left-[50%] w-[20%] h-[20%] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl'></div>
  </div>

  <div class='absolute inset-0 z-0 overflow-hidden opacity-10'>
    <div class='absolute top-[10%] left-[6%] text-6xl animate-pulse'>🎨</div>
    <div class='absolute top-[20%] right-[10%] text-5xl animate-pulse' style='animation-delay: 0.3s'>✏️</div>
    <div class='absolute bottom-[15%] left-[15%] text-4xl animate-pulse' style='animation-delay: 0.6s'>🖌️</div>
    <div class='absolute bottom-[25%] right-[18%] text-5xl animate-pulse' style='animation-delay: 0.9s'>💡</div>
  </div>

  <div class='container mx-auto px-4 relative z-10 py-20'>
    <div class='max-w-4xl mx-auto text-center'>
      <div class='inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full py-2 px-6 mb-8 text-sm font-semibold'>
        <Paintbrush class='w-4 h-4' />
        Kendin Tasarla
      </div>

      <h1 class='text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]'>
        Hayal Et,
        <br />
        <span class='bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent italic'>
          Biz Gerçekleştirelim 🎨
        </span>
      </h1>

      <p class='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 font-medium leading-relaxed'>
        Sürükle-bırak editör ile tamamen size özel davetiyeler oluşturun. Sıfır teknik bilgi gerekir — sadece hayal gücünüz yeterli.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center'>
        <a href='/order' class='btn btn-lg bg-gradient-to-r from-cyan-500 to-violet-500 border-0 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all px-10'>
          <Wand class='w-5 h-5' />
          Tasarlamaya Başla
        </a>
        <a href='/pricing' class='btn btn-lg btn-ghost px-10 group'>
          Fiyatları İncele
          <ChevronRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Araçlar -->
<section class='py-24 bg-base-100'>
  <div class='container mx-auto px-4'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Güçlü <span class='text-cyan-500'>Araçlar</span></h2>
      <p class='text-base-content/60 text-lg max-w-xl mx-auto font-medium'>Profesyonel tasarım araçları parmaklarınızın ucunda.</p>
    </div>
    <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto'>
      {#each tools as tool}
        <div class='card bg-base-200/50 shadow-lg hover:shadow-xl transition-all border border-base-content/5 group hover:-translate-y-2 cursor-pointer'>
          <div class='card-body items-center text-center p-6'>
            <div class='text-4xl mb-2 group-hover:scale-125 transition-transform'>{tool.emoji}</div>
            <h3 class='font-bold text-sm'>{tool.label}</h3>
            <p class='text-base-content/50 text-xs font-medium'>{tool.desc}</p>
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
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'><span class='text-cyan-500'>6 Adımda</span> Hayalinizdeki Davetiye</h2>
    </div>
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {#each steps as step}
        <div class='card bg-base-100 shadow-lg border border-base-content/5 group hover:-translate-y-1 transition-all'>
          <div class='card-body p-8'>
            <div class='flex items-center gap-4 mb-4'>
              <div class='text-3xl font-black text-cyan-200 dark:text-cyan-900/50 group-hover:text-cyan-500 transition-colors'>{step.num}</div>
              <div class='w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center text-cyan-500'>
                <step.icon class='w-5 h-5' />
              </div>
            </div>
            <h3 class='text-lg font-bold mb-2'>{step.title}</h3>
            <p class='text-base-content/60 text-sm font-medium'>{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class='py-24 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white relative overflow-hidden'>
  <div class='absolute inset-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>
  <div class='container mx-auto px-4 relative z-10 text-center'>
    <div class='text-5xl mb-6'>🖌️</div>
    <h2 class='text-4xl md:text-5xl font-black mb-4'>Yaratıcılığını Konuştur!</h2>
    <p class='text-white/80 text-lg max-w-xl mx-auto mb-8 font-medium'>Sıfırdan kendi davetiyeni tasarlamaya hemen başla.</p>
    <a href='/order' class='btn btn-lg bg-white text-cyan-600 border-0 shadow-xl hover:scale-105 transition-all font-bold px-10'>
      Tasarlamaya Başla
      <Paintbrush class='w-5 h-5' />
    </a>
  </div>
</section>
