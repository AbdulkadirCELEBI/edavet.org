<script lang='ts'>
  import { ArrowRight, Sparkles } from '@lucide/svelte'
</script>

<section id='cta' class='py-24 bg-primary text-primary-content relative overflow-hidden'>
  <!-- Dekoratif Arka Plan -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-30%] left-[-10%] w-[50%] h-[80%] bg-white/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-30%] right-[-10%] w-[50%] h-[80%] bg-white/5 rounded-full blur-3xl'></div>
    <!-- Yıldız Efekti -->
    <div class='absolute top-[10%] right-[20%] w-2 h-2 bg-white/30 rounded-full'></div>
    <div class='absolute top-[30%] left-[15%] w-1.5 h-1.5 bg-white/20 rounded-full'></div>
    <div class='absolute bottom-[25%] right-[30%] w-1 h-1 bg-white/25 rounded-full'></div>
    <div class='absolute top-[60%] left-[40%] w-2 h-2 bg-white/15 rounded-full'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <div class='max-w-3xl mx-auto text-center'>
      <!-- Üst Badge -->
      <div class='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full py-2 px-5 mb-8 text-sm font-medium'>
        <Sparkles class='w-4 h-4' />
        İlk davetiyenizi 2 dakikada oluşturun
      </div>

      <!-- Ana Başlık -->
      <h2 class='text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight'>
        Hayalinizdeki Davetiyeyi<br />
        <span class='text-accent'>Hemen</span> Oluşturun
      </h2>

      <!-- Alt Açıklama -->
      <p class='text-primary-content/80 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed'>
        Binlerce kullanıcı gibi siz de etkinliğinizi mükemmel bir davetiyeyle taçlandırın. Kredi kartı gerektirmez, hemen başlayın.
      </p>

      <!-- Butonlar -->
      <div class='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <a href='/invitations/custom' class='btn btn-accent btn-lg px-10 shadow-xl shadow-accent/30 hover:scale-105 transition-all font-bold group'>
          Ücretsiz Dene
          <ArrowRight class='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </a>
        <a href='/pricing' class='btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 btn-lg px-10 font-bold'>
          Paketleri İncele
        </a>
      </div>

      <!-- Güven Notu -->
      <div class='mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-content/60 text-sm font-medium'>
        <span class='flex items-center gap-2'>✓ Kredi kartı gerekmez</span>
        <span class='flex items-center gap-2'>✓ 2 dakikada hazır</span>
        <span class='flex items-center gap-2'>✓ 7 gün ücretsiz deneme</span>
      </div>
    </div>
  </div>
</section>
