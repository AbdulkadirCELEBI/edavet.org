<script lang='ts'>
  import { Mail, Phone, MapPin, Send, Clock } from '@lucide/svelte'

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      value: 'destek@edavet.org',
      href: 'mailto:destek@edavet.org',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 (555) 123 45 67',
      href: 'tel:+905551234567',
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cumartesi, 09:00 - 18:00',
      href: null,
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      href: null,
    },
  ]
</script>

<section id='contact' class='py-24 bg-base-200/50 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[20%] right-[0%] w-[25%] h-[30%] bg-primary/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[10%] left-[0%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <!-- Başlık -->
    <div class='text-center mb-16'>
      <div class='badge badge-outline badge-primary mb-4 py-3 px-5 font-medium'>
        📬 Bize Ulaşın
      </div>
      <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
        Size Yardımcı <span class='bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>Olalım</span>
      </h2>
      <p class='text-base-content/60 max-w-2xl mx-auto text-lg font-medium'>
        Herhangi bir sorunuz veya öneriniz mi var? Formdan bize yazın, en kısa sürede yanıt verelim.
      </p>
    </div>

    <div class='grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto'>
      <!-- İletişim Bilgileri -->
      <div class='lg:col-span-2 space-y-6'>
        {#each contactInfo as info}
          <div class='flex items-start gap-4 group'>
            <div class='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300'>
              <info.icon class='w-5 h-5' />
            </div>
            <div>
              <div class='font-bold text-sm text-base-content/50 uppercase tracking-wider'>{info.title}</div>
              {#if info.href}
                <a href={info.href} class='font-medium text-base-content hover:text-primary transition-colors'>{info.value}</a>
              {:else}
                <div class='font-medium text-base-content'>{info.value}</div>
              {/if}
            </div>
          </div>
        {/each}

        <!-- Sosyal Medya -->
        <div class='pt-6 border-t border-base-content/10'>
          <div class='font-bold text-sm text-base-content/50 uppercase tracking-wider mb-4'>Sosyal Medya</div>
          <div class='flex gap-3'>
            <a href='#' class='btn btn-circle btn-sm btn-ghost bg-base-100 hover:bg-primary hover:text-primary-content transition-all shadow-sm' aria-label='Instagram'>
              📸
            </a>
            <a href='#' class='btn btn-circle btn-sm btn-ghost bg-base-100 hover:bg-primary hover:text-primary-content transition-all shadow-sm' aria-label='Twitter'>
              🐦
            </a>
            <a href='#' class='btn btn-circle btn-sm btn-ghost bg-base-100 hover:bg-primary hover:text-primary-content transition-all shadow-sm' aria-label='YouTube'>
              ▶️
            </a>
          </div>
        </div>
      </div>

      <!-- İletişim Formu -->
      <div class='lg:col-span-3'>
        <form class='card bg-base-100 shadow-xl border border-base-content/5'>
          <div class='card-body p-8 gap-5'>
            <div class='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <fieldset class='fieldset'>
                <legend class='fieldset-legend text-xs font-semibold uppercase tracking-wider'>Ad Soyad</legend>
                <input type='text' placeholder='Adınız Soyadınız' class='input input-bordered w-full focus:input-primary' />
              </fieldset>
              <fieldset class='fieldset'>
                <legend class='fieldset-legend text-xs font-semibold uppercase tracking-wider'>E-posta</legend>
                <input type='email' placeholder='ornek@email.com' class='input input-bordered w-full focus:input-primary' />
              </fieldset>
            </div>
            <fieldset class='fieldset'>
              <legend class='fieldset-legend text-xs font-semibold uppercase tracking-wider'>Konu</legend>
              <select class='select select-bordered w-full focus:select-primary'>
                <option disabled selected>Konuyu seçin</option>
                <option>Genel Bilgi</option>
                <option>Teknik Destek</option>
                <option>Fiyatlandırma</option>
                <option>İş Birliği</option>
                <option>Diğer</option>
              </select>
            </fieldset>
            <fieldset class='fieldset'>
              <legend class='fieldset-legend text-xs font-semibold uppercase tracking-wider'>Mesajınız</legend>
              <textarea class='textarea textarea-bordered w-full h-32 focus:textarea-primary' placeholder='Mesajınızı buraya yazın...'></textarea>
            </fieldset>
            <button type='submit' class='btn btn-primary w-full group shadow-lg shadow-primary/20'>
              Mesajı Gönder
              <Send class='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
