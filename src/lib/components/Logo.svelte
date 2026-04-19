<script lang="ts">
  import { Mail, MailOpen, Sparkles } from '@lucide/svelte';
  
  let { class: className = '' } = $props();

  let isOpened = $state(false);

  function handleClick() {
    isOpened = true;
    setTimeout(() => {
      isOpened = false;
    }, 1500); // 1.5 saniye sonra animasyon sıfırlansın
  }
</script>

<div 
  class="flex items-center gap-3 group transition-transform active:scale-95 {className}"
  role="button"
  tabindex="0"
  onclick={handleClick}
  onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
  <!-- Işıltılı Arka Plan Gölgesi -->
  <div class="relative w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-[12px] shadow-[0_8px_20px_rgba(251,191,36,0.3)] bg-gradient-to-br from-[#FFE135] via-amber-400 to-amber-500 overflow-hidden border border-amber-300">
    
    <!-- Parlama Efekti (Şerit şeklide geçen işık) -->
    <div class="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>

    <!-- Cam Efekti Çerçevesi -->
    <div class="absolute inset-[2px] rounded-[10px] bg-white/20 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] z-10"></div>
    
    <!-- Mektup Animasyonu -->
    <div class="relative z-20 w-6 h-6 flex items-center justify-center">
      <!-- Kapalı Mektup -->
      <div 
        class="absolute inset-0 transition-all duration-500 transform {isOpened ? 'opacity-0 scale-75 -rotate-12' : 'opacity-100 scale-100 rotate-0 group-hover:scale-110'}"
      >
        <Mail class="w-6 h-6 text-amber-900 group-hover:text-amber-800 transition-colors drop-shadow-sm" strokeWidth={2.5} />
      </div>
      
      <!-- Açık Mektup -->
      <div 
        class="absolute inset-0 transition-all duration-500 transform {isOpened ? 'opacity-100 scale-110 rotate-0' : 'opacity-0 scale-75 rotate-12'}"
      >
        <MailOpen class="w-6 h-6 text-amber-900 drop-shadow-md" strokeWidth={2.5} />
      </div>
    </div>

    <!-- Premium Yıldız / Sparkles -->
    {#if isOpened}
      <Sparkles class="absolute -top-1 -right-1 w-5 h-5 text-white animate-ping z-30 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    {:else}
      <Sparkles class="absolute top-2 right-2 w-3 h-3 text-amber-100 animate-pulse z-30 opacity-0 group-hover:opacity-100 transition-opacity" />
    {/if}
  </div>

  <!-- Marken İsmi ve İmza -->
  <div class="flex flex-col justify-center">
    <!-- Logotype -->
    <div class="flex items-baseline relative leading-none">
      <span class="text-2xl lg:text-3xl font-black tracking-tighter text-base-content group-hover:text-amber-500 transition-colors duration-300">
        edavet
      </span>
      <span class="text-lg lg:text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-0.5">
        .org
      </span>
    </div>
  </div>
</div>

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(300%) skewX(-12deg); }
  }
</style>
