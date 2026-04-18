<script lang='ts'>
  import { MailOpen } from '@lucide/svelte'

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

  const languages = [
    { code: 'TR', country: 'tr', label: 'Türkçe' },
    { code: 'EN', country: 'gb', label: 'İngilizce' },
    { code: 'RU', country: 'ru', label: 'Rusça' },
    { code: 'AZ', country: 'az', label: 'Azerice' },
    { code: 'DE', country: 'de', label: 'Almanca' },
    { code: 'ES', country: 'es', label: 'İspanyolca' },
  ]
</script>

<!-- Mobil Sidebar -->
<div class='drawer-side z-60'>
  <label for='mobile-drawer' aria-label='Menüyü kapat' class='drawer-overlay'></label>
  <ul class='menu bg-base-200 min-h-full w-80 p-4 pt-8 gap-1'>
    <!-- Logo -->
    <li class='mb-4'>
      <a href='/' class='flex items-center gap-2'>
        <div class='p-2 bg-primary/10 rounded-xl'>
          <MailOpen class='w-6 h-6 text-primary' />
        </div>
        <span class='text-xl font-bold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
          edavet.org
        </span>
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

    <li><a href='/pricing' class='font-semibold'>Ücretler</a></li>
    <li><a href='/contact' class='font-semibold'>İletişim</a></li>

    <div class='divider my-1'></div>

    <!-- Dil Seçimi -->
    <li class='menu-title text-xs uppercase tracking-wider opacity-60'>Dil</li>
    {#each languages as lang}
      <li>
        <button class='flex items-center justify-start gap-4 py-3 active:bg-base-300'>
          <div class='shrink-0 w-6 h-4 overflow-hidden rounded-[2px] shadow-sm border border-base-300'>
            <img src={`https://flagcdn.com/${lang.country}.svg`} alt={`${lang.label} bayrağı`} class='w-full h-full object-cover' />
          </div>
          <span class='font-bold text-xs opacity-50 tracking-wider shrink-0 w-6 text-center'>{lang.code}</span>
          <span class='font-medium grow w-full whitespace-nowrap'>{lang.label}</span>
        </button>
      </li>
    {/each}
  </ul>
</div>
