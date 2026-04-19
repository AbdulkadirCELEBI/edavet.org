<script lang='ts'>
  import { Heart, Mail, PartyPopper, Star } from '@lucide/svelte'

  const stats = [
    { icon: Mail, value: '25,000+', label: 'Oluşturulan Davetiye', color: 'primary' },
    { icon: PartyPopper, value: '8,500+', label: 'Başarılı Etkinlik', color: 'secondary' },
    { icon: Heart, value: '15,000+', label: 'Mutlu Kullanıcı', color: 'accent' },
    { icon: Star, value: '%99', label: 'Memnuniyet Oranı', color: 'primary' },
  ]
</script>

<section id='stats' class='py-20 bg-primary text-primary-content relative overflow-hidden'>
  <!-- Dekoratif Daireler -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[-20%] left-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[-20%] right-[10%] w-[30%] h-[60%] bg-white/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <div class='grid grid-cols-2 lg:grid-cols-4 gap-8'>
      {#each stats as stat}
        <div class='flex flex-col items-center text-center group'>
          <div class='w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300'>
            <stat.icon class='w-8 h-8' />
          </div>
          <div class='text-4xl md:text-5xl font-black mb-2'>{stat.value}</div>
          <div class='text-primary-content/70 font-medium text-sm uppercase tracking-wider'>{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
