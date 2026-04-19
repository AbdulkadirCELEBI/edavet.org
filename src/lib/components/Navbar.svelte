<script lang='ts'>
  import { ChevronDown, Globe, MailOpen, Menu, Moon, Sun, ChevronLeft } from '@lucide/svelte'
  import { page } from '$app/stores'
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

  let isOpen = $state(false)
  let timeoutId: any
  let dropdownRef: HTMLElement

  function handleEnter() {
    if (timeoutId)
      clearTimeout(timeoutId)
    isOpen = true
  }

  function handleLeave() {
    timeoutId = setTimeout(() => {
      isOpen = false
    }, 1500)
  }

  function closeMenu() {
    isOpen = false
    if (timeoutId)
      clearTimeout(timeoutId)
  }

  function handleOutsideClick(e: MouseEvent) {
    if (isOpen && dropdownRef && !dropdownRef.contains(e.target as Node)) {
      closeMenu()
    }
  }
</script>

<svelte:window onclick={handleOutsideClick} />

<nav class='navbar bg-base-200 sticky top-0 z-50 px-4 md:px-8'>
  <div class='navbar-start'>
    <!-- Mobil Hamburger -->
    <label for='mobile-drawer' class='btn btn-ghost btn-circle lg:hidden' aria-label='Menüyü aç'>
      <Menu class='w-6 h-6' />
    </label>

    <!-- Premium Geri Butonu -->
    {#if $page.url.pathname !== '/'}
      <div class="mr-2 ml-1">
        <a href='/' 
           class='group relative flex items-center justify-center w-10 h-10 rounded-xl bg-base-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-base-content/5 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 active:scale-95' 
           title='Anasayfaya Dön'>
           
          <!-- Şık Pırıltı Arka Planı -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Pürüzsüz Yuvarlanmış Üçgen (SVG) -->
          <svg class="relative z-10 w-4 h-4 text-base-content/50 group-hover:text-primary transform group-hover:-translate-x-0.5 transition-all duration-300" 
               viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
            <path d="M17.5 4.3c0-1.54-1.7-2.47-2.98-1.65L4.44 10.1c-1.19.76-1.19 2.53 0 3.29l10.08 6.45c1.28.82 2.98-.11 2.98-1.65V4.3Z" />
          </svg>
        </a>
      </div>
    {/if}

    <!-- Logo -->
    <a href='/' class='outline-none'>
      <Logo />
    </a>
  </div>

  <div class='navbar-center hidden lg:flex'>
    <ul class='menu menu-horizontal px-2 gap-3 items-center'>
      <!-- Davetiyeler Dropdown (JS Hover with Delay) -->
      <li class="dropdown dropdown-bottom {isOpen ? 'dropdown-open' : ''}"
          bind:this={dropdownRef}
          onmouseenter={handleEnter}
          onmouseleave={handleLeave}>
        <div tabindex='0' role='button' class='text-[17px] px-8 py-3.5 font-bold tracking-tight text-base-content border border-base-content/15 hover:border-amber-500/40 hover:bg-amber-500/5 rounded-[10px] transition-all duration-300 gap-2 flex items-center bg-base-200/40 backdrop-blur-md shadow-md'>
          Davetiyeler
          <ChevronDown class='w-5 h-5 transition-transform duration-300 {isOpen ? "rotate-180 text-amber-500" : "opacity-40"}' />
        </div>
        <ul class='dropdown-content menu z-100 p-2 shadow-[0_30px_70px_rgba(0,0,0,0.15)] bg-base-100/98 backdrop-blur-2xl rounded-[16px] w-64 border border-base-content/10 mt-4'>
          {#each invitationLinks as link}
            <li><a href={link.href} class='font-medium text-[15px] hover:text-amber-600 hover:bg-amber-500/5 active:bg-amber-500/10 py-3 rounded-xl transition-colors' onclick={closeMenu}>{link.label}</a></li>
          {/each}
          <div class='divider my-1 opacity-20'></div>
          <li><a href='/invitations/custom' class='bg-amber-500/5 text-amber-600 dark:text-amber-400 font-bold py-3 rounded-xl transition-colors' onclick={closeMenu}>Özelleştir (Kendin Tasarla)</a></li>
        </ul>
      </li>
      <li><a href='/#pricing' class='text-[16px] px-7 py-3 font-semibold tracking-tight text-base-content border border-base-content/12 hover:border-amber-500/30 hover:bg-amber-500/5 rounded-[9px] transition-all duration-300 bg-base-200/35 backdrop-blur-sm shadow-sm'>Fiyatlandırma</a></li>
      <li><a href='/#contact' class='text-[15px] px-6 py-2.5 font-semibold tracking-tight text-base-content border border-base-content/10 hover:border-amber-500/30 hover:bg-amber-500/5 rounded-[8px] transition-all duration-300 bg-base-200/30 backdrop-blur-sm shadow-sm'>İletişim</a></li>
      <li><a href='/#features' class='text-[14px] px-5 py-2 font-medium tracking-tight text-base-content border border-base-content/8 hover:border-amber-500/30 hover:bg-amber-500/5 rounded-[7px] transition-all duration-300 bg-base-200/25 backdrop-blur-sm shadow-xs'>Hakkımızda</a></li>
    </ul>
  </div>
  <div class='navbar-end gap-1'>
    <!-- Dil Seçeneği -->
    <div class='dropdown dropdown-end hidden sm:block'>
      <div tabindex='0' role='button' class='btn btn-ghost btn-sm btn-circle opacity-60 hover:opacity-100 transition-opacity' aria-label='Dil Seç'>
        <Globe class='w-5 h-5' />
      </div>
      <ul class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-40 border border-base-content/10 mt-2'>
        <li><button class='active:bg-primary/10 flex items-center gap-2'><span class="text-lg leading-none">🇹🇷</span> Türkçe</button></li>
        <li><button class='active:bg-primary/10 flex items-center gap-2'><span class="text-lg leading-none">🇬🇧</span> İngilizce</button></li>
        <li><button class='active:bg-primary/10 flex items-center gap-2'><span class="text-lg leading-none">🇷🇺</span> Rusça</button></li>
      </ul>
    </div>

    <!-- Öne Çıkan CTA -->
    <a href="/invitations/custom" class="btn btn-sm sm:btn-md bg-amber-500 hover:bg-amber-600 border-0 text-white shadow-lg shadow-amber-500/20 px-6 rounded-full transition-all hover:scale-105 active:scale-95 ml-2 font-bold tracking-tight">
      Hemen Oluştur
    </a>

    <!-- Tema Değiştirici -->
    <label class='swap swap-rotate btn btn-ghost btn-sm btn-circle ml-1'>
      <input type='checkbox' class='theme-controller' value='dark' />
      <Sun class='swap-on w-5 h-5' />
      <Moon class='swap-off w-5 h-5' />
    </label>
  </div>
</nav>
