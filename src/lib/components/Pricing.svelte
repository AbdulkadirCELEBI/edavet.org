<script lang='ts'>
  import { Check, Zap, Clock, Shield, Globe } from '@lucide/svelte';
</script>

<section id='pricing' class='py-24 bg-base-100 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0 opacity-50'>
    <div class='absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <div class='text-center mb-16'>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>Sizin İçin En Uygun Paket</h2>
      <p class='text-base-content/60 max-w-2xl mx-auto text-lg font-medium'>
        Anılarınızı paylaşmak ve misafirlerinizi etkilemek için ihtiyacınız olan her şey burada.
      </p>
    </div>

    <!-- Pricing Cards -->
    <div class='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch items-center'>
      
      <!-- Starter -->
      <div class='card bg-base-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5 h-full'>
        <div class='card-body p-8'>
          <div class='mb-6'>
            <h3 class='text-2xl font-bold'>Başlangıç</h3>
            <p class='text-base-content/60 text-sm font-medium'>Sade ve şık bir başlangıç yapmak isteyenler için</p>
          </div>
          <div class='flex items-baseline gap-1 mb-8'>
            <span class='text-4xl font-black'>₺199</span>
          </div>
          <ul class='space-y-4 mb-8 text-left flex-1'>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Dijital LCV Yönetimi</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>10 Özel Fotoğraf Paylaşımı</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Harita ve Konum Entegrasyonu</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Canlı Geri Sayım Sayacı</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>1 Yıl Erişim Garantisi</span>
            </li>
          </ul>
          <div class='card-actions mt-auto'>
            <button class='btn btn-outline btn-primary w-full group py-4'>
              Hemen Başla
              <span class='group-hover:translate-x-1 transition-transform'>→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Professional (Anchor) -->
      <div class='card bg-primary text-primary-content shadow-2xl relative z-20 border-0 overflow-hidden lg:scale-110 h-fit'>
        <div class='absolute top-4 right-[-35px] bg-accent text-accent-content font-bold py-1 px-12 rotate-45 text-sm shadow-md invisible sm:visible'>
          POPYÜLER
        </div>
        <div class='card-body p-10'>
          <div class='mb-6'>
            <div class='flex items-center gap-2 mb-2'>
                <Zap class='w-6 h-6 fill-current text-accent' />
                <h3 class='text-2xl font-black'>Profesyonel</h3>
            </div>
            <p class='text-primary-content/80 text-sm italic font-semibold'>Anılarını ölümsüzleştirmek ve paylaşmak isteyenler için</p>
          </div>
          <div class='flex items-baseline gap-1 mb-8'>
            <span class='text-5xl font-black'>₺499</span>
          </div>
          <ul class='space-y-4 mb-10 text-left font-medium'>
            <li class='flex items-center gap-3'>
              <Check class='w-5 h-5 text-accent shrink-0' />
              <span>Sınırsız Fotoğraf Paylaşımı</span>
            </li>
            <li class='flex items-center gap-3'>
              <Check class='w-5 h-5 text-accent shrink-0' />
              <span>Misafirlerden Fotoğraf Toplama</span>
            </li>
            <li class='flex items-center gap-3'>
              <Check class='w-5 h-5 text-accent shrink-0' />
              <span>Dijital Anı Defteri</span>
            </li>
            <li class='flex items-center gap-3'>
              <Check class='w-5 h-5 text-accent shrink-0' />
              <span>Özel Arka Plan Müziği</span>
            </li>
            <li class='flex items-center gap-3'>
              <Check class='w-5 h-5 text-accent shrink-0' />
              <span>Tamamen Reklamsız Deneyim</span>
            </li>
          </ul>
          <div class='card-actions justify-center'>
            <button class='btn btn-accent btn-lg w-full shadow-lg border-0 hover:scale-105 transition-all font-bold'>
              En Popüler Seçimi Yap
            </button>
          </div>
        </div>
      </div>

      <!-- Corporate -->
      <div class='card bg-base-200/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-content/5 h-full'>
        <div class='card-body p-8'>
          <div class='mb-6'>
            <h3 class='text-2xl font-bold'>Kurumsal</h3>
            <p class='text-base-content/60 text-sm font-medium'>Geniş kapsamlı organizasyonlar için</p>
          </div>
          <div class='flex items-baseline gap-1 mb-8'>
            <span class='text-4xl font-black'>₺999</span>
          </div>
          <ul class='space-y-4 mb-8 text-left flex-1'>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Gelişmiş Veri Analitikleri</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Özel Alan Adı Desteği</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>KVKK Uyumlu Güvenli Depolama</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>Beyaz Etiket (Logo Kaldırma)</span>
            </li>
            <li class='flex items-center gap-3 font-medium text-base-content/80'>
              <Check class='w-5 h-5 text-success shrink-0' />
              <span>7/24 Öncelikli Özel Destek</span>
            </li>
          </ul>
          <div class='card-actions mt-auto'>
            <button class='btn btn-outline btn-secondary w-full py-4'>
              Bizimle İletişime Geç
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Neden Biz? Section -->
    <div class='mt-32 pt-16 border-t border-base-content/10'>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-12'>
        <div class='flex flex-col items-center text-center group'>
          <div class='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300'>
            <Clock class='w-8 h-8' />
          </div>
          <h4 class='text-xl font-bold mb-3'>Anında Yayında</h4>
          <p class='text-base-content/60 font-medium'>Ödemenizi yaptıktan saniyeler sonra davetiyenizi paylaşmaya başlayabilirsiniz.</p>
        </div>
        <div class='flex flex-col items-center text-center group'>
          <div class='w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-300'>
            <Shield class='w-8 h-8' />
          </div>
          <h4 class='text-xl font-bold mb-3'>Sıfır Veri Kaybı</h4>
          <p class='text-base-content/60 font-medium'>Paylaşılan her fotoğraf ve mesaj bulut sistemlerimizde ömür boyu saklanır.</p>
        </div>
        <div class='flex flex-col items-center text-center group'>
          <div class='w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-content transition-all duration-300'>
            <Globe class='w-8 h-8' />
          </div>
          <h4 class='text-xl font-bold mb-3'>Tüm Cihazlarla Uyumlu</h4>
          <p class='text-base-content/60 font-medium'>Davetiyeniz telefon, tablet veya bilgisayarda her zaman kusursuz görünür.</p>
        </div>
      </div>
    </div>
  </div>
</section>
