<script lang='ts'>
  import { MailOpen } from '@lucide/svelte'
  import Logo from './Logo.svelte'

  const invitationLinks = [
    { href: '/invitations/wedding', label: 'Düğün-Nikah Davetiyesi' },
    { href: '/invitations/birthday', label: 'Doğum Günü' },
    { href: '/invitations/babyshower', label: 'Bebek Partisi' },
    { href: '/invitations/circumcision', label: 'Sünnet Merasimi' },
    { href: '/invitations/trip', label: 'Gezi & Grup Etkinlikleri' },
    { href: '/invitations/opening', label: 'Açılış Davetiyeleri' },
    { href: '/invitations/business', label: 'İş-Fuar Davetiyeleri' },
    { href: '/invitations/concert', label: 'Konser Davetiyesi' },
    { href: '/invitations/special', label: 'Özel Davetler' },
  ]
</script>

<!-- Mobil Sidebar -->
<div class='drawer-side z-60'>
  <label for='mobile-drawer' aria-label='Menüyü kapat' class='drawer-overlay'></label>
  <ul class='menu bg-base-200 min-h-full w-80 p-4 pt-8 gap-1'>
    <!-- Logo -->
    <li class='mb-4'>
      <a href='/' class='inline-block outline-none hover:bg-transparent'>
        <Logo class="scale-90 origin-left" />
      </a>
    </li>

    <div class='divider my-0'></div>

    <!-- Davetiyeler -->
    <li>
      <details>
        <summary class='font-semibold'>Davetiyeler</summary>
        <ul>
          {#each invitationLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
          <div class='divider my-1'></div>
          <li><a href='/invitations/custom' class='text-primary font-bold'>Özelleştir (Kendin Tasarla)</a></li>
        </ul>
      </details>
    </li>

    <li><a href='/#pricing' class='font-semibold'>Fiyatlandırma</a></li>
    <li><a href='/#contact' class='font-semibold'>İletişim</a></li>

    <div class='divider my-1'></div>

    <!-- Dil Seçimi -->
    <li class='menu-title text-xs uppercase tracking-wider opacity-60'>Dil</li>
    <li><button>Türkçe</button></li>
    <li><button>Rusça</button></li>
    <li><button>İngilizce</button></li>
  </ul>
</div>
