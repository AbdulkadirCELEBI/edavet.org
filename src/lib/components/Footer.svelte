<script lang='ts'>
  import { Heart } from '@lucide/svelte'
  import LanguageSelector from './LanguageSelector.svelte'

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    davetiyeler: [
      { href: '/invitations/wedding', label: 'Düğün Davetiyesi' },
      { href: '/invitations/birthday', label: 'Doğum Günü' },
      { href: '/invitations/babyshower', label: 'Bebek Partisi' },
      { href: '/invitations/circumcision', label: 'Sünnet Merasimi' },
      { href: '/invitations/custom', label: 'Özel Tasarım' },
    ],
    kurumsal: [
      { href: '/pricing', label: 'Fiyatlandırma' },
      { href: '/contact', label: 'İletişim' },
      { href: '#faq', label: 'S.S.S.' },
      { href: '#team', label: 'Ekibimiz' },
    ],
    yasal: [
      { href: '/', label: 'Gizlilik Politikası' },
      { href: '/', label: 'Kullanım Koşulları' },
      { href: '/', label: 'KVKK Aydınlatma' },
      { href: '/', label: 'Çerez Politikası' },
    ],
  }
</script>

<footer class='bg-[#001540] text-white border-t border-white/5'>
  <div class='container mx-auto px-4'>
    <!-- Üst Kısım -->
    <div class='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
      <!-- Marka & Dil -->
      <div class='lg:col-span-1 space-y-8'>
        <div class='flex items-center gap-6'>
          <!-- Altın Hediye İkonu -->
          <div class='w-16 h-16 rounded-full bg-linear-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 border-2 border-white'>
            <svg class='w-8 h-8 text-white' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'>
              <path d='M20 12v10H4V12'></path>
              <path d='M2 7h20v5H2z'></path>
              <path d='M12 22V7'></path>
              <path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'></path>
              <path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'></path>
            </svg>
          </div>

          <!-- Sosyal Medya -->
          <div class='flex gap-4'>
            <a href='/' class='text-white/80 hover:text-white transition-colors' aria-label='Twitter'>
              <svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </a>
            <a href='/' class='text-white/80 hover:text-white transition-colors' aria-label='Instagram'>
              <svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
              </svg>
            </a>
            <a href='/' class='text-white/80 hover:text-white transition-colors' aria-label='YouTube'>
              <svg class='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86-.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z'></path>
                <polygon points='9.75 15.02 15.5 12 9.75 8.98 9.75 15.02'></polygon>
              </svg>
            </a>
          </div>
        </div>

        <LanguageSelector direction='top' />

        <p class='text-white/50 text-sm font-medium leading-relaxed max-w-xs'>
          Her anınız için mükemmel dijital davetiyeler. Modern, şık ve kolay kullanımlı davetiye platformu.
        </p>
      </div>

      <!-- Davetiyeler -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-white/30'>Davetiyeler</h3>
        <ul class='space-y-3'>
          {#each footerLinks.davetiyeler as link}
            <li>
              <a href={link.href} class='text-white/70 hover:text-white font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Kurumsal -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-white/30'>Kurumsal</h3>
        <ul class='space-y-3'>
          {#each footerLinks.kurumsal as link}
            <li>
              <a href={link.href} class='text-white/70 hover:text-white font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Yasal -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-white/30'>Yasal</h3>
        <ul class='space-y-3'>
          {#each footerLinks.yasal as link}
            <li>
              <a href={link.href} class='text-white/70 hover:text-white font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Alt Çizgi -->
    <div class='py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
      <p class='text-white/40 text-sm font-medium'>
        © {currentYear} edavet.org — Tüm hakları saklıdır.
      </p>
      <p class='text-white/40 text-sm font-medium flex items-center gap-1'>
        Türkiye'de <Heart class='w-3.5 h-3.5 text-rose-500 fill-rose-500 inline' /> ile yapıldı
      </p>
    </div>
  </div>
</footer>
