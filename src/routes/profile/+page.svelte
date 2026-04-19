<script lang='ts'>
  import { page } from '$app/stores'
  import { authClient } from '$lib/auth-client'
  import { ArrowLeft, Loader2, Mail, Save, User } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'
  import { fade } from 'svelte/transition'

  const session = $derived($page.data.session)

  let name = $state('')
  let email = $state('')
  let isLoading = $state(false)

  // Initialize values when session is available
  $effect(() => {
    if (session?.user) {
      name = session.user.name
      email = session.user.email
    }
  })

  async function handleUpdate() {
    if (!name || !email) {
      toast.error('İsim ve e-posta alanları boş bırakılamaz.')
      return
    }

    isLoading = true
    const { error } = await authClient.updateUser({
      name,
    // Note: Changing email might require verification depending on Better Auth config,
      // but we'll implement the basic update here.
    })

    if (error) {
      toast.error(error.message || 'Güncelleme sırasında bir hata oluştu.')
    }
    else {
      toast.success('Profil başarıyla güncellendi.')
    }
    isLoading = false
  }
</script>

{#if session}
  <div class='min-h-screen bg-base-200/50 py-12 px-4' in:fade>
    <div class='max-w-2xl mx-auto'>
      <!-- Back Link -->
      <a href='/dashboard' class='btn btn-ghost btn-sm gap-2 mb-8 hover:bg-base-200 rounded-xl'>
        <ArrowLeft class='w-4 h-4' /> Dashboard'a Dön
      </a>

      <!-- Profile Header -->
      <div class='flex items-center gap-6 mb-12'>
        <div class='avatar avatar-placeholder'>
          <div class='bg-primary text-primary-content rounded-full w-20 shadow-xl ring-2 ring-primary ring-offset-base-100 ring-offset-2'>
            {#if session.user.image}
              <img src={session.user.image} alt={session.user.name} />
            {:else}
              <span class='text-3xl font-bold'>{session.user.name.charAt(0)}</span>
            {/if}
          </div>
        </div>
        <div>
          <h1 class='text-3xl font-bold tracking-tight'>Profil Ayarları</h1>
          <p class='text-base-content/60'>Hesap bilgilerinizi buradan güncelleyebilirsiniz.</p>
        </div>
      </div>

      <!-- Settings Form -->
      <div class='card bg-base-100 shadow-xl border border-base-200 overflow-hidden rounded-3xl'>
        <div class='card-body p-8 space-y-6'>

          <!-- Name Field -->
          <div class='form-control w-full'>
            <label class='label' for='name'>
              <span class='label-text font-bold text-base-content/70'>Adınız Soyadınız</span>
            </label>
            <div class='relative'>
              <div class='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none opacity-40'>
                <User class='w-5 h-5' />
              </div>
              <input
                id='name'
                type='text'
                bind:value={name}
                placeholder='İsim girin'
                class='input input-bordered w-full pl-12 rounded-xl focus:border-primary transition-all bg-base-100'
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class='form-control w-full opacity-80 cursor-not-allowed'>
            <label class='label' for='email'>
              <span class='label-text font-bold text-base-content/70'>E-posta Adresi</span>
              <span class='label-text-alt text-xs opacity-50'>E-posta değiştirme şu an kapalıdır</span>
            </label>
            <div class='relative'>
              <div class='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none opacity-40'>
                <Mail class='w-5 h-5' />
              </div>
              <input
                id='email'
                type='email'
                value={email}
                disabled
                class='input input-bordered w-full pl-12 rounded-xl bg-base-200 cursor-not-allowed'
              />
            </div>
          </div>

          <div class='divider opacity-50'></div>

          <!-- Save Button -->
          <button
            onclick={handleUpdate}
            disabled={isLoading}
            class='btn btn-primary btn-block rounded-xl shadow-lg shadow-primary/20 gap-2 h-14 text-lg font-bold'
          >
            {#if isLoading}
              <Loader2 class='w-5 h-5 animate-spin' />
              Güncelleniyor...
            {:else}
              <Save class='w-5 h-5' />
              Değişiklikleri Kaydet
            {/if}
          </button>

        </div>
      </div>

      <!-- Helper Text -->
      <div class='mt-8 text-center px-8'>
        <p class='text-sm opacity-40'>
          E-posta adresinizi değiştirmek isterseniz lütfen destek ekibiyle iletişime geçin.
        </p>
      </div>

    </div>
  </div>
{/if}
