<script lang='ts'>
  import { Star, Quote } from '@lucide/svelte'

  const testimonials = [
    {
      name: 'Elif & Murat',
      role: 'Düğün Davetiyesi',
      avatar: '👰',
      rating: 5,
      text: 'Düğün davetiyemizi edavet.org ile hazırladık ve misafirlerimizden inanılmaz güzel geri dönüşler aldık. LCV takibi sayesinde organizasyonu çok rahat yönettik.',
    },
    {
      name: 'Ayşe Kaya',
      role: 'Doğum Günü Davetiyesi',
      avatar: '🎂',
      rating: 5,
      text: 'Kızımın 1 yaş doğum günü için mükemmel bir davetiye oluşturduk. Fotoğraf galerisi özelliği sayesinde tüm anıları tek bir yerde topladık.',
    },
    {
      name: 'Mehmet Demir',
      role: 'Kurumsal Etkinlik',
      avatar: '💼',
      rating: 5,
      text: 'Şirketimizin lansman etkinliği için kurumsal paketi tercih ettik. Özel domain ve analitik özellikleri tam ihtiyacımız olan şeydi.',
    },
    {
      name: 'Zeynep Arslan',
      role: 'Bebek Partisi',
      avatar: '👶',
      rating: 5,
      text: 'Baby shower davetiyemiz o kadar güzel oldu ki, arkadaşlarım nereden yaptırdığımı sormadan edemedi. Kesinlikle tavsiye ederim!',
    },
    {
      name: 'Ahmet & Selin',
      role: 'Nişan Davetiyesi',
      avatar: '💍',
      rating: 5,
      text: 'Nişanımız için hem şık hem de pratik bir çözüm bulduk. Misafirlerimiz harita entegrasyonu sayesinde mekanı çok kolay buldu.',
    },
    {
      name: 'Fatma Yılmaz',
      role: 'Sünnet Merasimi',
      avatar: '🎉',
      rating: 5,
      text: 'Oğlumun sünnet merasimi için hazırladığımız davetiye herkesi çok etkiledi. Müzik özelliği davetiyeye ayrı bir hava kattı.',
    },
  ]
</script>

<section id='testimonials' class='py-24 bg-base-100 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[10%] right-[5%] w-[20%] h-[20%] bg-secondary/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[10%] left-[5%] w-[20%] h-[20%] bg-primary/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <!-- Başlık -->
    <div class='text-center mb-16'>
      <div class='badge badge-outline badge-accent mb-4 py-3 px-5 font-medium'>
        💬 Kullanıcılarımız Ne Diyor?
      </div>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
        Binlerce Mutlu <span class='bg-linear-to-r from-accent to-primary bg-clip-text text-transparent'>Kullanıcı</span>
      </h2>
      <p class='text-base-content/60 max-w-2xl mx-auto text-lg font-medium'>
        Onların hikayesi, sizin de hikayeniz olabilir.
      </p>
    </div>

    <!-- Yorum Kartları -->
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {#each testimonials as testimonial}
        <div class='card bg-base-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-base-content/5 group hover:-translate-y-1'>
          <div class='card-body p-8'>
            <!-- Tırnak İkonu -->
            <div class='mb-4'>
              <Quote class='w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors' />
            </div>

            <!-- Yorum Metni -->
            <p class='text-base-content/70 font-medium leading-relaxed mb-6 italic'>
              "{testimonial.text}"
            </p>

            <!-- Alt Bilgi -->
            <div class='flex items-center gap-4 mt-auto pt-4 border-t border-base-content/5'>
              <div class='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl'>
                {testimonial.avatar}
              </div>
              <div>
                <div class='font-bold text-sm'>{testimonial.name}</div>
                <div class='text-base-content/50 text-xs font-medium'>{testimonial.role}</div>
              </div>
              <div class='ml-auto flex gap-0.5'>
                {#each Array(testimonial.rating) as _}
                  <Star class='w-4 h-4 text-warning fill-warning' />
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
