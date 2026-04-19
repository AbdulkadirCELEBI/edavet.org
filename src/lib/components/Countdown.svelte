<script lang='ts'>
  import { onMount } from 'svelte'

  const { targetDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString() } = $props()

  let days = $state(0)
  let hours = $state(0)
  let minutes = $state(0)
  let seconds = $state(0)

  function updateCountdown() {
    const target = new Date(targetDate).getTime()
    const now = Date.now()
    const diff = target - now

    if (diff <= 0) {
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
      return
    }

    days = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    seconds = Math.floor((diff % (1000 * 60)) / 1000)
  }

  onMount(() => {
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  })
</script>

<div class='grid grid-flow-col gap-5 text-center auto-cols-max justify-center p-8 bg-base-200/50 backdrop-blur-md rounded-3xl border border-base-300 shadow-2xl'>
  <div class='flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[80px]'>
    <span class='countdown font-mono text-5xl'>
      <span style='--value:{days};'></span>
    </span>
    gün
  </div>
  <div class='flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[80px]'>
    <span class='countdown font-mono text-5xl'>
      <span style='--value:{hours};'></span>
    </span>
    saat
  </div>
  <div class='flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[80px]'>
    <span class='countdown font-mono text-5xl'>
      <span style='--value:{minutes};'></span>
    </span>
    dak
  </div>
  <div class='flex flex-col p-2 bg-neutral rounded-box text-neutral-content min-w-[80px]'>
    <span class='countdown font-mono text-5xl'>
      <span style='--value:{seconds};'></span>
    </span>
    sn
  </div>
</div>
