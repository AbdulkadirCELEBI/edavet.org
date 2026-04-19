<script lang="ts">
  import { ShieldCheck, Heart, Star, Users, ArrowRight, PlayCircle } from '@lucide/svelte';
</script>

<div class='hero min-h-[90vh] bg-base-100 overflow-hidden relative flex items-center pt-24 pb-16 lg:pt-32'>
  <!-- Background Accents (Warm & Professional Balance) -->
  <div class='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
    <div class='absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-[100%] blur-[140px] dark:bg-amber-600/15'></div>
    <div class='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-[100%] blur-[120px]'></div>
  </div>

  <div class='container mx-auto px-4 z-10'>
    <div class='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
      
      <!-- Text Content (Conversion Optimized) -->
      <div class='flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0'>
        <div class='inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8 transform transition-all hover:scale-105 cursor-default'>
          <span class="flex h-2 w-2 rounded-full bg-amber-500"></span>
          <span class="text-xs font-bold uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400">Hayalinizdeki Davetiyeyi Tasarlayın</span>
        </div>

        <h1 class='text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-base-content'>
          Davetiyenizi <span class="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent italic font-serif font-light">Dakikalar</span> İçinde Hazırlayın, Anında Paylaşın.
        </h1>

        <p class='text-lg md:text-xl text-base-content/75 leading-relaxed font-medium mb-10 max-w-xl mx-auto lg:mx-0'>
           En özel günleriniz için profesyonel ve etkileyici dijital davetiyeler. Kartvizit kadar hızlı, düğün albümü kadar değerli. <span class="text-amber-600 font-bold">Kredi kartı gerekmez, ücretsiz deneyin.</span>
        </p>

        <div class='flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start px-4 sm:px-0'>
          <a href='/invitations/custom' class='btn btn-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 border-0 text-white shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-1 rounded-[12px] px-8 h-18 sm:h-16'>
            Hemen Başla (Ücretsiz)
            <ArrowRight class="w-5 h-5 ml-1 opacity-90" />
          </a>
          <a href='/#how-it-works' class='btn btn-lg bg-base-100 hover:bg-base-200 border border-base-content/10 shadow-sm rounded-[12px] px-8 group text-base-content/80 h-18 sm:h-16'>
            <PlayCircle class="w-5 h-5 mr-1 group-hover:text-amber-500" />
            Nasıl Çalışır?
          </a>
        </div>

        <!-- Social Proof (Micro-conversion bias) -->
        <div class="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-80 justify-center lg:justify-start">
          <div class="flex -space-x-3">
             <img class="w-10 h-10 rounded-full border-4 border-base-100" src="https://i.pravatar.cc/100?img=1" alt="User" />
             <img class="w-10 h-10 rounded-full border-4 border-base-100" src="https://i.pravatar.cc/100?img=2" alt="User" />
             <img class="w-10 h-10 rounded-full border-4 border-base-100" src="https://i.pravatar.cc/100?img=3" alt="User" />
          </div>
          <div class="text-sm font-semibold tracking-tight text-base-content/60"> 
            <span class="text-base-content font-bold">12,000+</span> kişi bugün davetiyesini oluşturdu.
          </div>
        </div>
      </div>

      <!-- Hero Visual (The Mockup) -->
      <div class='flex-1 relative w-full flex justify-center lg:justify-end'>
        <div class="relative w-full max-w-[450px]">
          <!-- Glow Behind Phone -->
          <div class="absolute -inset-10 bg-amber-500/20 rounded-full blur-[80px] animate-pulse"></div>
          
          <!-- Mockup Frame -->
          <div class="relative rounded-[40px] border-[10px] border-base-200 shadow-2xl overflow-hidden aspect-[9/16] bg-base-300">
            <img src="/hero-mockup.png" alt="Premium Invitation Mockup" class="w-full h-full object-cover select-none pointer-events-none" />
          </div>

          <!-- Feature Tag Overlay -->
          <div class="absolute -bottom-6 -left-6 bg-base-100/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-base-content/5 animate-bounce hidden sm:block">
            <div class="flex items-center gap-3">
              <div class="bg-emerald-500/10 p-2 rounded-lg"><ShieldCheck class="w-5 h-5 text-emerald-500" /></div>
              <div class="text-left"><p class="text-xs font-bold uppercase tracking-widest text-emerald-600">Aktif LCV Takibi</p><p class="text-[10px] text-base-content/60 font-medium">Siz uyurken misafirlerinizi sayar.</p></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
