<script lang='ts'>
  import { Heart, Crown, PartyPopper, ChartBar, Music, MapPin, Sparkles, Wand, Camera, Briefcase } from '@lucide/svelte'

  const categories = [
    {
      id: 'wedding',
      title: 'Düğün & Nikah',
      desc: 'En romantik başlangıçlar için zarif tasarımlar.',
      icon: Heart,
      href: '/invitations/wedding',
      color: 'rose',
    },
    {
      id: 'birthday',
      title: 'Doğum Günü',
      desc: 'Her yaşın coşkusunu renkli davetiyelerle kutlayın.',
      icon: PartyPopper,
      href: '/invitations/birthday',
      color: 'blue',
    },
    {
      id: 'business',
      title: 'İş & Kurumsal',
      desc: 'Prestijli açılışlar ve kurumsal vizyonunuz için.',
      icon: Briefcase,
      href: '/invitations/business',
      color: 'slate',
    },
    {
      id: 'concert',
      title: 'Konser & Sahne',
      desc: 'Ritmi hissedin, sahne ışıklarını davetinize taşıyın.',
      icon: Music,
      href: '/invitations/concert',
      color: 'purple',
    },
    {
      id: 'opening',
      title: 'Açılış & Lansman',
      desc: 'Markanızın ilk adımını unutulmaz bir etkiyle atın.',
      icon: ChartBar,
      href: '/invitations/opening',
      color: 'emerald',
    },
    {
      id: 'babyshower',
      title: 'Bebek Partisi',
      desc: 'Minik adımlar için sevgi dolu ilk davet.',
      icon: Sparkles,
      href: '/invitations/babyshower',
      color: 'sky',
    },
  ]
</script>

<section id="invitations" class="py-24 bg-base-100 relative overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="text-center mb-16">
      <div class="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-serif italic tracking-widest text-sm uppercase">
        Kategoriler
      </div>
      <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tight">Eşsiz <span class="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent italic font-serif font-light">Davetiye</span> Koleksiyonumuz</h2>
      <p class="text-base-content/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
        Her etkinlik farklı bir hikaye anlatır. Sizin hikayenize en uygun konsepti seçin ve kişiselleştirmeye başlayın.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each categories as category}
        <a href={category.href} class="group block relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <!-- Background Glow -->
          <div class="absolute inset-0 bg-base-200 group-hover:scale-110 transition-transform duration-700"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 p-8 flex flex-col justify-end z-20">
            <div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-500">
              <category.icon class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">{category.title}</h3>
            <p class="text-white/70 font-medium text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {category.desc}
            </p>
          </div>

          <!-- Premium Border Animation -->
          <div class="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/40 transition-all duration-700 rounded-3xl z-30 pointer-events-none"></div>
        </a>
      {/each}
      
      <!-- Custom Card -->
      <a href="/invitations/custom" class="group block relative h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-600 to-amber-400">
        <div class="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-20">
          <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30 group-hover:scale-125 transition-all duration-500">
            <Wand class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-3xl font-black text-white mb-3">Kendin Tasarla</h3>
          <p class="text-white/90 font-medium">Sınırları zorlayın, tamamen size özgü bir davetiye yaratın.</p>
        </div>
      </a>
    </div>
  </div>
</section>
