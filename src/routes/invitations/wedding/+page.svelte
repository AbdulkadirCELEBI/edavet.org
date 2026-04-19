<script lang='ts'>
  import Countdown from '$lib/components/Countdown.svelte'
  import { Heart } from '@lucide/svelte'

  // Default target date: 3 months from now
  const weddingDate = new Date()
  weddingDate.setMonth(weddingDate.getMonth() + 3)
</script>

<div class='min-h-screen bg-linear-to-b from-base-100 to-base-200'>
  <div class='max-w-4xl mx-auto py-20 px-4 text-center'>
    <div class='inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6'>
      <Heart class='w-8 h-8 text-primary animate-pulse' />
    </div>

    <h1 class='text-5xl md:text-7xl font-bold mb-6 tracking-tight'>
      Düğün & Nikah <br />
      <span class='bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
        Davetiyeleri
      </span>
    </h1>

    <p class='text-xl opacity-70 mb-12 max-w-2xl mx-auto'>
      En mutlu gününüz için modern, şık ve kişiselleştirilebilir dijital davetiyeler.
      Geri sayım sayacı ile heyecanı paylaşın.
    </p>

    <div class='mb-16 transform hover:scale-105 transition-transform duration-500'>
      <h2 class='text-sm uppercase tracking-[0.3em] font-bold opacity-50 mb-6'>Büyük Güne Kalan Süre</h2>
      <Countdown targetDate={weddingDate.toISOString()} />
    </div>

    <div class='grid md:grid-cols-2 gap-8 text-left'>
      <div class='card bg-base-100 shadow-xl border border-base-200'>
        <div class='card-body'>
          <h3 class='card-title text-primary'>Neden Dijital Davetiye?</h3>
          <ul class='space-y-4 mt-2'>
            <li class='flex items-start gap-2'>
              <span class='badge badge-primary badge-outline mt-1'>✓</span>
              <span>Anında paylaşım (WhatsApp, Instagram, vb.)</span>
            </li>
            <li class='flex items-start gap-2'>
              <span class='badge badge-primary badge-outline mt-1'>✓</span>
              <span>Canlı geri sayım ve konum entegrasyonu</span>
            </li>
            <li class='flex items-start gap-2'>
              <span class='badge badge-primary badge-outline mt-1'>✓</span>
              <span>Lale (RSVP) yönetimi ve misafir listesi</span>
            </li>
          </ul>
        </div>
      </div>

      <div class='card bg-primary text-primary-content shadow-xl'>
        <div class='card-body'>
          <h3 class='card-title text-white'>Hemen Başlayın</h3>
          <p class='opacity-90'>Sadece birkaç dakika içinde kendi düğün davetiyenizi oluşturun ve sevdiklerinizle paylaşın.</p>
          <div class='card-actions justify-end mt-4'>
            <a href='/invitations/custom' class='btn btn-white btn-lg w-full'>Tasarlamaya Başla</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
