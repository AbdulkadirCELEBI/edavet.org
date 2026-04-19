<script lang='ts'>
  import { Heart } from '@lucide/svelte'
  import Logo from './Logo.svelte'

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
      { href: '#', label: 'Gizlilik Politikası' },
      { href: '#', label: 'Kullanım Koşulları' },
      { href: '#', label: 'KVKK Aydınlatma' },
      { href: '#', label: 'Çerez Politikası' },
    ],
  }
</script>

<footer class='bg-base-200 border-t border-base-content/5'>
  <div class='container mx-auto px-4'>
    <!-- Üst Kısım -->
    <div class='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
      <!-- Marka -->
      <div class='lg:col-span-1'>
        <a href='/' class='inline-block mb-4 outline-none'>
          <Logo class="scale-90 origin-left" />
        </a>
        <p class='text-base-content/60 text-sm font-medium leading-relaxed mb-6'>
          Her anınız için mükemmel dijital davetiyeler. Modern, şık ve kolay kullanımlı davetiye platformu.
        </p>
        <!-- Sosyal Medya -->
        <div class='flex gap-2'>
          <a href='#' class='btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary' aria-label='Instagram'>📸</a>
          <a href='#' class='btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary' aria-label='Twitter'>🐦</a>
          <a href='#' class='btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary' aria-label='YouTube'>▶️</a>
        </div>
      </div>

      <!-- Davetiyeler -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-base-content/50'>Davetiyeler</h3>
        <ul class='space-y-3'>
          {#each footerLinks.davetiyeler as link}
            <li>
              <a href={link.href} class='text-base-content/70 hover:text-primary font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Kurumsal -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-base-content/50'>Kurumsal</h3>
        <ul class='space-y-3'>
          {#each footerLinks.kurumsal as link}
            <li>
              <a href={link.href} class='text-base-content/70 hover:text-primary font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Yasal -->
      <div>
        <h3 class='font-bold text-sm uppercase tracking-wider mb-4 text-base-content/50'>Yasal</h3>
        <ul class='space-y-3'>
          {#each footerLinks.yasal as link}
            <li>
              <a href={link.href} class='text-base-content/70 hover:text-primary font-medium text-sm transition-colors'>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Alt Çizgi -->
    <div class='py-6 border-t border-base-content/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
      <p class='text-base-content/40 text-sm font-medium'>
        © {currentYear} edavet.org — Tüm hakları saklıdır.
      </p>
      <p class='text-base-content/40 text-sm font-medium flex items-center gap-1'>
        Türkiye'de <Heart class='w-3.5 h-3.5 text-error fill-error inline' /> ile yapıldı
      </p>
    </div>
  </div>
</footer>
