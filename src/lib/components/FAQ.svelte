<script lang='ts'>
  const faqs = [
    {
      question: 'Dijital davetiye nasıl oluşturulur?',
      answer: 'Çok basit! Davetiye kategorinizi seçin, beğendiğiniz şablonu belirleyin, bilgilerinizi girin ve kişiselleştirin. Davetiyeniz birkaç dakika içinde hazır olacak ve paylaşıma başlayabileceksiniz.',
    },
    {
      question: 'Davetiyemi hangi platformlarda paylaşabilirim?',
      answer: 'Oluşturduğunuz davetiyeyi WhatsApp, Instagram, Telegram, Facebook, e-posta ve SMS dahil olmak üzere tüm platformlarda paylaşabilirsiniz. Size özel bir bağlantı oluşturulur ve istediğiniz yere gönderebilirsiniz.',
    },
    {
      question: 'LCV (Katılım Takibi) nasıl çalışır?',
      answer: 'Misafirleriniz davetiyeyi açtığında "Katılacağım", "Katılamayacağım" veya "Belki" seçeneklerinden birini işaretler. Siz de kontrol panelinizden tüm yanıtları anlık olarak takip edebilirsiniz.',
    },
    {
      question: 'Fotoğraf galerisi özelliği nedir?',
      answer: 'Premium paketlerde sunulan fotoğraf galerisi ile davetiyenize özel fotoğraflar ekleyebilirsiniz. Profesyonel pakette ise misafirleriniz de kendi çektikleri fotoğrafları yükleyebilir, böylece etkinliğin tüm anıları tek bir yerde toplanır.',
    },
    {
      question: 'Ödeme yaptıktan sonra davetiyem ne kadar süre aktif kalır?',
      answer: 'Başlangıç paketinde davetiyeniz 1 yıl boyunca aktif kalır. Profesyonel ve Kurumsal paketlerde ise süresiz erişim hakkına sahip olursunuz. Etkinliğiniz bittikten sonra da anılarınız korunmaya devam eder.',
    },
    {
      question: 'Davetiyemi oluşturduktan sonra düzenleyebilir miyim?',
      answer: 'Elbette! Davetiyenizi oluşturduktan sonra istediğiniz zaman içerik, fotoğraf, tarih ve diğer tüm bilgileri güncelleyebilirsiniz. Değişiklikler anında yansır.',
    },
    {
      question: 'İade politikanız nedir?',
      answer: 'Satın alma tarihinden itibaren 7 gün içinde, davetiyenizi henüz paylaşmadıysanız tam iade talep edebilirsiniz. Müşteri memnuniyeti bizim için her şeyden önemlidir.',
    },
  ]
</script>

<section id='faq' class='py-24 bg-base-100 relative overflow-hidden'>
  <!-- Arka plan süslemesi -->
  <div class='absolute inset-0 z-0'>
    <div class='absolute top-[10%] left-[5%] w-[20%] h-[30%] bg-secondary/5 rounded-full blur-3xl'></div>
    <div class='absolute bottom-[10%] right-[5%] w-[20%] h-[30%] bg-primary/5 rounded-full blur-3xl'></div>
  </div>

  <div class='container mx-auto px-4 relative z-10'>
    <div class='max-w-3xl mx-auto'>
      <!-- Başlık -->
      <div class='text-center mb-16'>
        <div class='badge badge-outline badge-secondary mb-4 py-3 px-5 font-medium'>
          ❓ Merak Ettikleriniz
        </div>
        <h2 class='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
          Sıkça Sorulan <span class='bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent'>Sorular</span>
        </h2>
        <p class='text-base-content/60 text-lg font-medium'>
          Aklınızdaki soruların cevaplarını burada bulabilirsiniz.
        </p>
      </div>

      <!-- Akordeon -->
      <div class='space-y-4'>
        {#each faqs as faq, i}
          <div class='collapse collapse-arrow bg-base-200/50 border border-base-content/5 shadow-sm hover:shadow-md transition-shadow'>
            <input type='radio' name='faq-accordion' checked={i === 0} />
            <div class='collapse-title text-lg font-bold'>
              {faq.question}
            </div>
            <div class='collapse-content'>
              <p class='text-base-content/70 font-medium leading-relaxed pt-2'>
                {faq.answer}
              </p>
            </div>
          </div>
        {/each}
      </div>

      <!-- Alt Not -->
      <div class='text-center mt-12'>
        <p class='text-base-content/50 font-medium'>
          Sorunuz burada yok mu?
          <a href='/contact' class='link link-primary font-bold'>Bize ulaşın</a>, hemen yardımcı olalım.
        </p>
      </div>
    </div>
  </div>
</section>
