import { browser } from '$app/environment'

export const theme = $state({
  current: 'light',
})

export function initTheme() {
  if (!browser)
return

  const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  theme.current = saved
  document.documentElement.setAttribute('data-theme', saved)
}

export function toggleTheme() {
  const next = theme.current === 'light' ? 'dark' : 'light'
  theme.current = next
  if (browser) {
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }
}
