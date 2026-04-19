<script lang='ts'>
  import { Contact } from '$lib/components'
  import { fade } from 'svelte/transition'
</script>

<svelte:head>
  <title>İletişim | edavet.org</title>
  <meta name='description' content='Soru, destek veya iş birliği için bizimle iletişime geçin. WhatsApp, Telegram ve E-posta ile yanınızdayız.' />
</svelte:head>

<div in:fade>
  <Contact />
</div>
