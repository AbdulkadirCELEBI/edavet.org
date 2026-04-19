<script lang='ts'>
  import { ChevronDown } from '@lucide/svelte'
  import { fade, fly } from 'svelte/transition'

  const { direction = 'down' } = $props()

  const languages = [
    { code: 'TR', country: 'tr', label: 'Türkçe' },
    { code: 'GB', country: 'gb', label: 'İngilizce' },
    { code: 'RU', country: 'ru', label: 'Rusça' },
    { code: 'AZ', country: 'az', label: 'Azerice' },
    { code: 'DE', country: 'de', label: 'Almanca' },
    { code: 'ES', country: 'es', label: 'İspanyolca' },
  ]

  let isOpen = $state(false)
  let selectedLang = $state(languages[0])
  let triggerRef: HTMLElement

  function toggle() {
    isOpen = !isOpen
  }

  function select(lang: typeof languages[0]) {
    selectedLang = lang
    isOpen = false
  }

  function handleOutsideClick(e: MouseEvent) {
    if (isOpen && triggerRef && !triggerRef.contains(e.target as Node)) {
      isOpen = false
    }
  }
</script>

<svelte:window onclick={handleOutsideClick} />

<div class='relative inline-block text-left' bind:this={triggerRef}>
  <!-- Premium Button -->
  <button
    onclick={toggle}
    class='group flex items-center gap-3.5 px-4 py-2.5 bg-base-100 dark:bg-base-200/80 hover:bg-base-200/50 border border-base-content/10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-500 active:scale-[0.97]'
    aria-label='Dil Seçimi'
  >
    <!-- Flag with Soft Shadow -->
    <div class='relative flex-none w-7 h-5 overflow-hidden rounded-[3px] shadow-[0_1px_4px_rgba(0,0,0,0.1)] ring-1 ring-base-content/5'>
      <img
        src={`https://flagcdn.com/${selectedLang.country}.svg`}
        alt={selectedLang.label}
        class='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
      />
    </div>

    <!-- Typography: Theme Toned & Elegant -->
    <span class='flex-none text-[14px] font-bold tracking-[0.05em] text-base-content uppercase antialiased'>
      {selectedLang.code}
    </span>

    <!-- Thin Modern Chevron -->
    <ChevronDown
      class="w-3.5 h-3.5 text-base-content/40 transition-transform duration-500 ease-out {isOpen ? 'rotate-180 text-primary' : 'group-hover:text-base-content/70'}"
      strokeWidth={2.5}
    />
  </button>

  <!-- Luxury Dropdown Content -->
  {#if isOpen}
    <div
      in:fly={{ y: direction === 'down' ? 8 : -8, duration: 400, delay: 50 }}
      out:fade={{ duration: 200 }}
      class="absolute right-0 {direction === 'down' ? 'mt-3 top-full' : 'mb-3 bottom-full'} w-56 p-2 bg-base-100/98 backdrop-blur-md border border-base-content/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-100 origin-top-right overflow-hidden"
    >
      <div class='flex flex-col gap-1'>
        {#each languages as lang}
          <button
            onclick={() => select(lang)}
            class="group flex items-center gap-4 px-3 py-3 rounded-[12px] transition-all duration-300 {selectedLang.code === lang.code ? 'bg-base-content/5' : 'hover:bg-base-content/5'}"
          >
            <!-- Item Flag -->
            <div class='flex-none w-6 h-4 overflow-hidden rounded-[2px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-base-content/5'>
              <img
                src={`https://flagcdn.com/${lang.country}.svg`}
                alt=""
                class='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>

            <!-- Item Code -->
            <span class='flex-none text-[11px] font-bold tracking-widest text-base-content/40 group-hover:text-base-content/70 transition-colors uppercase w-7 text-center'>
              {lang.code}
            </span>

            <!-- Item Label -->
            <span class='flex-1 text-sm font-medium text-base-content/80 group-hover:text-base-content transition-all text-left'>
              {lang.label}
            </span>

            {#if selectedLang.code === lang.code}
              <div class='w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]'></div>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  /* Custom anti-aliasing for the elegant look */
  span {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
