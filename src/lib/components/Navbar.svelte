<script lang='ts'>
  import { ChevronDown, Globe, MailOpen, Menu, Moon, Sun } from '@lucide/svelte'

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

    <!-- Logo -->
    <a href='/' class='flex items-center gap-2 group transition-transform active:scale-95'>
      <div class='p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
        <MailOpen class='w-6 h-6 text-primary' />
      </div>
      <span class='text-xl font-bold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
        edavet.org
      </span>
    </a>
  </div>

  <div class='navbar-center hidden lg:flex'>
    <ul class='menu menu-horizontal px-1 gap-1'>
      <!-- Davetiyeler Dropdown (JS Hover with Delay) -->
      <li class="dropdown dropdown-bottom {isOpen ? 'dropdown-open' : ''}"
          bind:this={dropdownRef}
          onmouseenter={handleEnter}
          onmouseleave={handleLeave}>
        <div tabindex='0' role='button' class='btn btn-ghost btn-sm gap-1 normal-case font-medium hover:bg-base-300'>
          Davetiyeler
          <ChevronDown class='w-4 h-4 opacity-70' />
        </div>
        <ul class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-64 border border-base-200'>
          {#each invitationLinks as link}
            <li><a href={link.href} class='active:bg-primary/10' onclick={closeMenu}>{link.label}</a></li>
          {/each}
          <div class='divider my-1'></div>
          <li><a href='/invitations/custom' class='bg-primary/10 text-primary font-bold hover:bg-primary/20' onclick={closeMenu}>Özelleştir (Kendin Tasarla)</a></li>
        </ul>
      </li>
      <li><a href='/pricing'>Ücretler</a></li>
      <li><a href='/contact'>İletişim</a></li>
    </ul>
  </div>

  <div class='navbar-end gap-1'>
    <!-- Dil Seçeneği -->
    <div class='dropdown dropdown-end'>
      <div tabindex='0' role='button' class='btn btn-ghost btn-sm btn-circle' aria-label='Dil Seç'>
        <Globe class='w-5 h-5' />
      </div>
      <ul class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-40 border border-base-200'>
        <li><button class='active:bg-primary/10'>Türkçe</button></li>
        <li><button class='active:bg-primary/10'>Rusça</button></li>
        <li><button class='active:bg-primary/10'>İngilizce</button></li>
      </ul>
    </div>

    <!-- Tema Değiştirici -->
    <label class='swap swap-rotate btn btn-ghost btn-sm btn-circle'>
      <input type='checkbox' class='theme-controller' value='dark' />
      <Sun class='swap-on w-5 h-5' />
      <Moon class='swap-off w-5 h-5' />
    </label>

    <!-- Satın Al Butonu -->
    <a href='/order' class='btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all ml-1'>
      Satın Al
    </a>
  </div>
</nav>
