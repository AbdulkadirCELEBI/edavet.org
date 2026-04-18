<script lang='ts'>
  import { Footer, Navbar } from '$lib/components'
  import MobileDrawer from '$lib/components/MobileDrawer.svelte'
  import './layout.css'

  const { children } = $props()
</script>

<svelte:head>
  <title>edavet.org</title>
  <link rel='icon' href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💌</text></svg>' />
</svelte:head>

<div class='drawer'>
  <input id='mobile-drawer' type='checkbox' class='drawer-toggle' />

  <div class='drawer-content flex flex-col min-h-screen'>
    <Navbar />
    <main class='grow'>
      {@render children()}
    </main>
    <Footer />
  </div>

  <MobileDrawer />
</div>
