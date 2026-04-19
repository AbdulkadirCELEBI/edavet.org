<script lang='ts'>
  import { page } from '$app/stores'
  import { authClient } from '$lib/auth-client'
  import { cart, clearCartLocal } from '$lib/cart.svelte'
  import {
    ChevronDown,
    ChevronUp,
    LayoutDashboard,
    LogOut,
    MailOpen,
    Menu,
    Moon,
    ShoppingCart,
    Sun,
    User,
  } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'

  const session = $derived($page.data.session)

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

  let currentLang = $state(languages[0])
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

  async function handleLogout() {
    await authClient.signOut()
    clearCartLocal()
    toast.success('Çıkış yapıldı')
    window.location.href = '/'
  }
</script>

<svelte:window onclick={handleOutsideClick} />

<nav
  class='navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-base-200'
>
  <div class='navbar-start'>
    <!-- Mobil Hamburger -->
    <label
      for='mobile-drawer'
      class='btn btn-ghost btn-circle lg:hidden'
      aria-label='Menüyü aç'
    >
      <Menu class='w-6 h-6' />
    </label>

    <!-- Logo -->
    <a
      href='/'
      class='flex items-center gap-2 group transition-transform active:scale-95'
    >
      <div
        class='p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'
      >
        <MailOpen class='w-6 h-6 text-primary' />
      </div>
      <span
        class='text-xl font-bold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'
      >
        edavet.org
      </span>
    </a>
  </div>

  <div class='navbar-center hidden lg:flex'>
    <ul class='menu menu-horizontal px-1 gap-1'>
      <!-- Davetiyeler Dropdown (JS Hover with Delay) -->
      <li
        class="dropdown dropdown-bottom {isOpen ? 'dropdown-open' : ''}"
        bind:this={dropdownRef}
        onmouseenter={handleEnter}
        onmouseleave={handleLeave}
      >
        <div
          tabindex='0'
          role='button'
          class='btn btn-ghost btn-sm gap-1 normal-case font-medium hover:bg-base-300'
        >
          Davetiyeler
          <ChevronDown class='w-4 h-4 opacity-70' />
        </div>
        <ul
          class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-64 border border-base-200'
        >
          {#each invitationLinks as link}
            <li>
              <a
                href={link.href}
                class='active:bg-primary/10'
                onclick={closeMenu}>{link.label}</a
              >
            </li>
          {/each}
          <div class='divider my-1'></div>
          <li>
            <a
              href='/invitations/custom'
              class='bg-primary/10 text-primary font-bold hover:bg-primary/20'
              onclick={closeMenu}>Özelleştir (Kendin Tasarla)</a
            >
          </li>
        </ul>
      </li>
      <li><a href='/pricing'>Ücretler</a></li>
      <li><a href='/contact'>İletişim</a></li>
    </ul>
  </div>

  <div class='navbar-end gap-1'>
    <!-- Dil Seçeneği -->
    <div class='dropdown dropdown-end'>
      <div
        tabindex='0'
        role='button'
        class='group flex items-center justify-between gap-1.5 px-3 py-1 bg-base-100 hover:bg-base-200 transition-colors rounded-none shadow-xs border-0 cursor-pointer h-9'
      >
        <div class='flex items-center gap-2'>
          <div class='shrink-0 w-6 h-4 overflow-hidden rounded-[2px] shadow-xs'>
            <img
              src={`https://flagcdn.com/${currentLang.country}.svg`}
              alt={`${currentLang.label} bayrağı`}
              class='w-full h-full object-cover'
            />
          </div>
          <span class='font-bold text-base-content text-base leading-none'
          >{currentLang.code}</span
          >
        </div>
        <ChevronUp class='w-4 h-4 text-base-content/60 ml-0.5' />
      </div>
      <ul
        class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200 gap-1 mt-2'
      >
        {#each languages as lang}
          <li>
            <button
              class='active:bg-primary/10 flex items-center justify-start gap-4 py-3 hover:bg-base-200 transition-colors rounded-lg w-full text-left'
              onclick={() => {
                currentLang = lang;
                (document.activeElement as HTMLElement)?.blur()
              }}
            >
              <div
                class='shrink-0 w-6 h-4 overflow-hidden rounded-[2px] shadow-sm border border-base-300'
              >
                <img
                  src={`https://flagcdn.com/${lang.country}.svg`}
                  alt={`${lang.label} bayrağı`}
                  class='w-full h-full object-cover'
                />
              </div>
              <span
                class='font-bold text-xs opacity-50 tracking-wider shrink-0 w-6 text-center'
              >{lang.code}</span
              >
              <span class='font-medium grow w-full whitespace-nowrap'
              >{lang.label}</span
              >
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Tema Değiştirici -->
    <label class='swap swap-rotate btn btn-ghost btn-sm btn-circle mr-1'>
      <input type='checkbox' class='theme-controller' value='dark' />
      <Sun class='swap-on w-5 h-5' />
      <Moon class='swap-off w-5 h-5' />
    </label>

    <!-- Sepet İkonu -->
    <a
      href='/order'
      class='btn btn-ghost btn-sm btn-circle mr-1 relative'
      aria-label='Sepetim'
    >
      <ShoppingCart class='w-5 h-5' />
      {#if cart.count > 0}
        <span
          class='badge badge-primary badge-xs absolute top-1 right-1 font-bold'
        >{cart.count}</span
        >
      {/if}
    </a>

    {#if session}
      <!-- Kullanıcı Menüsü -->
      <div class='dropdown dropdown-end'>
        <div tabindex='0' role='button' class='btn btn-ghost btn-circle avatar'>
          <div
            class='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'
          >
            {#if session.user.image}
              <img src={session.user.image} alt={session.user.name} />
            {:else}
              <div
                class='bg-primary text-primary-content flex items-center justify-center h-full w-full font-bold'
              >
                {session.user.name.charAt(0)}
              </div>
            {/if}
          </div>
        </div>
        <ul
          class='dropdown-content menu z-100 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200 mt-3'
        >
          <li class='menu-title px-4 py-2 opacity-50 text-xs'>
            {session.user.email}
          </li>
          <li>
            <a href='/dashboard' class='gap-3'
            ><LayoutDashboard class='w-4 h-4' /> Dashboard</a
            >
          </li>
          <li>
            <a href='/profile' class='gap-3'><User class='w-4 h-4' /> Profil</a>
          </li>
          <div class='divider my-1'></div>
          <li>
            <button onclick={handleLogout} class='text-error gap-3'
            ><LogOut class='w-4 h-4' /> Çıkış Yap</button
            >
          </li>
        </ul>
      </div>
    {:else}
      <!-- Giriş Yap / Kayıt Ol -->
      <a href='/login' class='btn btn-ghost btn-sm hidden md:inline-flex'
      >Giriş Yap</a
      >
      <a
        href='/register'
        class='btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 ml-1 rounded-xl'
      >
        Kayıt Ol
      </a>
    {/if}
  </div>
</nav>
