<script lang='ts'>
  import { Palette, Share2, Users, Camera, MapPin, Music } from '@lucide/svelte'

  const features = [
    {
      icon: Palette,
      title: 'Benzersiz Tasarımlar',
      description: 'Düğün, doğum günü, sünnet ve daha fazlası için profesyonelce hazırlanmış şablonlar arasından seçin veya sıfırdan kendi tasarımınızı oluşturun.',
      color: 'primary',
    },
    {
      icon: Share2,
      title: 'Tek Tıkla Paylaşım',
      description: 'Oluşturduğunuz davetiyeyi WhatsApp, Instagram, Telegram ve diğer tüm platformlarda anında paylaşın.',
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Akıllı LCV Takibi',
      description: 'Misafirlerinizin katılım durumlarını canlı olarak takip edin, kişi sayısını kolayca planlayın.',
      color: 'accent',
    },
    {
      icon: Camera,
      title: 'Fotoğraf Galerisi',
      description: 'Özel anlarınızı yüksek kaliteli fotoğraf galerisiyle davetiyenize ekleyin, misafirleriniz de kendi karelerini yüklesin.',
      color: 'primary',
    },
    {
      icon: MapPin,
      title: 'Konum Entegrasyonu',
      description: 'Etkinlik adresini harita üzerinde gösterin; misafirleriniz tek tıkla yol tarifi alsın, asla kaybolmasın.',
      color: 'secondary',
    },
    {
      icon: Music,
      title: 'Müzik & Animasyon',
      description: 'Davetiyenize özel arka plan müziği ve göz alıcı animasyonlar ekleyerek unutulmaz bir deneyim yaratın.',
      color: 'accent',
    },
  ]
</script>

<section id='features' class='py-24 bg-base-200/50 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[20%] left-[-5%] w-[25%] h-[25%] bg-primary/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[20%] right-[-5%] w-[25%] h-[25%] bg-accent/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <!-- Başlık -->
    <div class='text-center mb-16'>
      <div class='badge badge-outline badge-secondary mb-4 py-3 px-5 font-medium uppercase tracking-widest text-[11px]'>
        ✨ Zarafetin Dijital Hali
      </div>
      <h2 class='text-4xl md:text-5xl font-black mb-6 tracking-tight'>
        Anılarınızı <span class='bg-linear-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent'>Sanata</span> Dönüştüren Dokunuşlar
      </h2>
      <p class='text-base-content/70 max-w-2xl mx-auto text-lg font-medium leading-relaxed'>
        Size özel detayları estetik birer sanat eserine dönüştürerek, misafirleriniz için 
        unutulmaz ve prestij dolu bir ilk imza sunuyoruz.
      </p>
    </div>

    <!-- Özellik Kartları -->
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {#each features as feature}
        <div class='card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-content/5 group hover:-translate-y-2'>
          <div class='card-body p-8'>
            <div class='w-14 h-14 bg-{feature.color}/10 rounded-2xl flex items-center justify-center mb-5 text-{feature.color} group-hover:scale-110 group-hover:bg-{feature.color} group-hover:text-{feature.color}-content transition-all duration-300'>
              <feature.icon class='w-7 h-7' />
            </div>
            <h3 class='card-title text-xl font-bold mb-2'>{feature.title}</h3>
            <p class='text-base-content/60 font-medium leading-relaxed'>{feature.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
