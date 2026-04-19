<script lang='ts'>
  import { ExternalLink, Globe, Mail } from '@lucide/svelte'

  const team = [
    {
      name: 'Abdullah',
      role: 'Kurucu & Geliştirici',
      avatar: '👨‍💻',
      bio: 'Full-stack geliştirici. Kullanıcı deneyimini mükemmelleştirmek için tutkuyla çalışıyor.',
    },
    {
      name: 'Tasarım Ekibi',
      role: 'UI/UX Tasarım',
      avatar: '🎨',
      bio: 'Her davetiyenin görsel bir şaheser olmasını sağlayan yaratıcı ekibimiz.',
    },
    {
      name: 'Destek Ekibi',
      role: 'Müşteri Başarısı',
      avatar: '💬',
      bio: 'Sorularınızı anında yanıtlayan ve sürecinizi kolaylaştıran destek ekibimiz.',
    },
  ]
</script>

<section id='team' class='py-24 bg-base-200/50 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[30%] right-[0%] w-[20%] h-[40%] bg-accent/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <!-- Başlık -->
    <div class='text-center mb-16'>
      <div class='badge badge-outline badge-primary mb-4 py-3 px-5 font-medium'>
        🤝 Arkasındaki Ekip
      </div>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
        Tutkulu <span class='bg-linear-to-r from-primary to-accent bg-clip-text text-transparent'>Ekibimiz</span>
      </h2>
      <p class='text-base-content/60 max-w-2xl mx-auto text-lg font-medium'>
        Sizin için en iyi dijital davetiye deneyimini oluşturmak adına gece gündüz çalışan ekibimizle tanışın.
      </p>
    </div>

    <!-- Ekip Kartları -->
    <div class='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
      {#each team as member}
        <div class='card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body items-center text-center p-8'>
            <!-- Avatar -->
            <div class='w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
              {member.avatar}
            </div>
            <h3 class='text-xl font-bold'>{member.name}</h3>
            <div class='badge badge-primary badge-outline badge-sm font-medium'>{member.role}</div>
            <p class='text-base-content/60 text-sm font-medium mt-3 leading-relaxed'>
              {member.bio}
            </p>
            <!-- Sosyal Medya -->
            <div class='flex gap-3 mt-4'>
              <button class='btn btn-ghost btn-circle btn-sm hover:bg-primary/10 hover:text-primary transition-colors'>
                <ExternalLink class='w-4 h-4' />
              </button>
              <button class='btn btn-ghost btn-circle btn-sm hover:bg-primary/10 hover:text-primary transition-colors'>
                <Globe class='w-4 h-4' />
              </button>
              <button class='btn btn-ghost btn-circle btn-sm hover:bg-primary/10 hover:text-primary transition-colors'>
                <Mail class='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
