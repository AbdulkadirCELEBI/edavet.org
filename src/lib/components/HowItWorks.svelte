<script lang="ts">
  import { LayoutTemplate, Edit3, Send, CheckCircle2 } from '@lucide/svelte';

  const steps = [
    {
      icon: LayoutTemplate,
      title: 'Tasarımını Seç',
      desc: 'Onlarca premium kategori arasından etkinliğine en uygun şablonu belirle.',
      color: 'amber'
    },
    {
      icon: Edit3,
      title: 'Kişiselleştir',
      desc: 'İsimler, tarih ve mekan gibi detayları kendine özel dokunuşlarla doldur.',
      color: 'amber'
    },
    {
      icon: Send,
      title: 'Göz Açıp Kapayınca Paylaş',
      desc: 'Özel linkini oluştur ve sevdiklerine WhatsApp veya SMS ile anında gönder.',
      color: 'amber'
    }
  ];
</script>

<section id="how-it-works" class="py-24 bg-base-200/30 relative overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <!-- Header -->
    <div class="text-center mb-20">
      <h2 class="text-3xl md:text-5xl font-black mb-6 tracking-tight">Nasıl <span class="text-amber-500 italic font-serif">Çalışır?</span></h2>
      <p class="text-base-content/60 max-w-xl mx-auto text-lg font-medium">Davetiyenizi oluşturmak bir mesaj göndermek kadar basit.</p>
    </div>

    <!-- Steps Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
      <!-- Connection Line (Desktop) -->
      <div class="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent z-0"></div>

      {#each steps as step, i}
        <div class="flex flex-col items-center text-center group relative z-10">
          <div class="w-20 h-20 bg-base-100 rounded-[24px] shadow-xl flex items-center justify-center mb-8 border border-base-content/5 group-hover:border-amber-500/40 group-hover:scale-110 transition-all duration-500 relative">
            <!-- Step Number -->
            <div class="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
              {i + 1}
            </div>
            <step.icon class="w-10 h-10 text-amber-500" strokeWidth={1.5} />
          </div>
          <h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-amber-600 transition-colors">{step.title}</h3>
          <p class="text-base-content/70 font-medium leading-relaxed px-4">{step.desc}</p>
        </div>
      {/each}
    </div>

    <!-- Bottom Action -->
    <div class="mt-20 flex justify-center">
        <div class="inline-flex items-center gap-2 text-emerald-500 font-bold bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20">
            <CheckCircle2 class="w-5 h-5" />
            <span>Kullanıma Hazır: %100 Dijital & Çevre Dostu</span>
        </div>
    </div>
  </div>
</section>
