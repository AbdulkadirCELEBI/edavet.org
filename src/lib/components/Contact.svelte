<script lang='ts'>
  import { ArrowRight, Clock, Mail, MessageCircle, Send, User } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'

  let isSubmitting = $state(false)

  async function handleSubmit(event: Event) {
    event.preventDefault()
    isSubmitting = true

    // Simulate API call
    setTimeout(() => {
      isSubmitting = false
      toast.success('Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.');
      (event.target as HTMLFormElement).reset()
    }, 1500)
  }
</script>

<section class='py-24 bg-[#F9FAFB] dark:bg-base-100/50' id='contact'>
  <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

    <!-- Header Section -->
    <div class='text-center max-w-3xl mx-auto mb-16'>
      <div class='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-sm'>
        <Clock class='w-4 h-4' />
        <span>Genellikle 24 saat içinde dönüş yapıyoruz</span>
      </div>
      <h2 class='text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-base-content'>
        Bizimle İletişime Geçin
      </h2>
      <p class='text-lg text-base-content/60 leading-relaxed max-w-2xl mx-auto'>
        Soru, destek talepleri veya iş birliği fırsatları için bize aşağıdaki kanallardan hızlıca ulaşabilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class='grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch'>

      <!-- Left Column: Contact Cards -->
      <div class='lg:col-span-5 flex flex-col gap-5'>

        <!-- WhatsApp Card -->
        <a href='https://wa.me/905555555555' target='_blank' rel='noopener noreferrer' class='group flex-1 p-6 bg-base-100 rounded-3xl border border-base-200 hover:border-success/30 hover:shadow-xl hover:shadow-success/5 transition-all duration-300'>
          <div class='flex items-start gap-5'>
            <div class='p-3.5 bg-success/10 text-success rounded-2xl group-hover:scale-110 group-hover:bg-success group-hover:text-white transition-all shadow-sm'>
              <MessageCircle class='w-7 h-7' />
            </div>
            <div class='grow'>
              <h3 class='font-bold text-xl mb-1 group-hover:text-success transition-colors text-base-content'>WhatsApp Destek</h3>
              <p class='text-sm text-base-content/60 mb-4 line-clamp-2'>Hızlı destek, paket bilgileri ve kısa sorularınız için anında mesajlaşın.</p>
              <div class='flex items-center gap-2 text-sm font-bold text-success group-hover:underline underline-offset-4'>
                Mesaj Gönder <ArrowRight class='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </a>

        <!-- Telegram Card -->
        <a href='https://t.me/edavet' target='_blank' rel='noopener noreferrer' class='group flex-1 p-6 bg-base-100 rounded-3xl border border-base-200 hover:border-[#229ED9]/30 hover:shadow-xl hover:shadow-[#229ED9]/5 transition-all duration-300'>
          <div class='flex items-start gap-5'>
            <div class='p-3.5 bg-[#229ED9]/10 text-[#229ED9] rounded-2xl group-hover:scale-110 group-hover:bg-[#229ED9] group-hover:text-white transition-all shadow-sm'>
              <Send class='w-7 h-7' />
            </div>
            <div class='grow'>
              <h3 class='font-bold text-xl mb-1 group-hover:text-[#229ED9] transition-colors text-base-content'>Telegram Kanalı</h3>
              <p class='text-sm text-base-content/60 mb-4 line-clamp-2'>Alternatif hızlı iletişim ve güncel duyurular için kanalımıza katılın.</p>
              <div class='flex items-center gap-2 text-sm font-bold text-[#229ED9] group-hover:underline underline-offset-4'>
                Sohbet Başlat <ArrowRight class='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </a>

        <!-- Email Card -->
        <a href='mailto:destek@edavet.org' class='group flex-1 p-6 bg-base-100 rounded-3xl border border-base-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'>
          <div class='flex items-start gap-5'>
            <div class='p-3.5 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm'>
              <Mail class='w-7 h-7' />
            </div>
            <div class='grow'>
              <h3 class='font-bold text-xl mb-1 group-hover:text-primary transition-colors text-base-content'>E-posta Gönder</h3>
              <p class='text-sm text-base-content/60 mb-4 line-clamp-2'>Resmi iletişim, fatura talepleri ve detaylı iş birlikleri için yazın.</p>
              <div class='flex items-center gap-2 text-sm font-bold text-primary group-hover:underline underline-offset-4'>
                destek@edavet.org <ArrowRight class='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          </div>
        </a>

      </div>

      <!-- Right Column: Contact Form -->
      <div class='lg:col-span-7 h-full'>
        <div class='bg-base-100 h-full rounded-3xl border border-base-200 shadow-xl shadow-base-content/5 p-8 md:p-12 flex flex-col justify-center'>
          <div class='mb-8'>
            <h3 class='text-3xl font-bold mb-3 text-base-content'>Bize Yazın</h3>
            <p class='text-base-content/60 text-lg'>Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.</p>
          </div>

          <form onsubmit={handleSubmit} class='space-y-6'>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div class='form-control w-full'>
                <label class='label' for='contact-name'><span class='label-text font-bold text-base-content/80'>Ad Soyad</span></label>
                <div class='relative'>
                  <div class='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none opacity-40'>
                    <User class='w-5 h-5' />
                  </div>
                  <input id='contact-name' type='text' required placeholder='Adınız Soyadınız' class='input input-lg input-bordered w-full pl-14 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 bg-base-200/30 focus:bg-base-100 transition-all text-base' />
                </div>
              </div>

              <div class='form-control w-full'>
                <label class='label' for='contact-email'><span class='label-text font-bold text-base-content/80'>E-posta Adresi</span></label>
                <div class='relative'>
                  <div class='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none opacity-40'>
                    <Mail class='w-5 h-5' />
                  </div>
                  <input id='contact-email' type='email' required placeholder='ornek@email.com' class='input input-lg input-bordered w-full pl-14 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 bg-base-200/30 focus:bg-base-100 transition-all text-base' />
                </div>
              </div>
            </div>

            <div class='form-control w-full'>
              <label class='label' for='contact-message'><span class='label-text font-bold text-base-content/80'>Mesajınız</span></label>
              <textarea id='contact-message' required placeholder='Size nasıl yardımcı olabiliriz? Detaylıca yazabilirsiniz...' class='textarea textarea-bordered h-40 w-full rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 bg-base-200/30 focus:bg-base-100 transition-all resize-none py-5 px-5 text-base leading-relaxed'></textarea>
            </div>

            <button type='submit' disabled={isSubmitting} class='btn btn-primary w-full rounded-2xl h-16 text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all'>
              {#if isSubmitting}
                <span class='loading loading-spinner text-primary-content'></span> Gönderiliyor...
              {:else}
                Mesajı Gönder <Send class='w-5 h-5 ml-2' />
              {/if}
            </button>
            <p class='text-center text-xs text-base-content/40 mt-4'>
              Kişisel verileriniz gizlilik politikamız kapsamında korunmaktadır.
            </p>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
