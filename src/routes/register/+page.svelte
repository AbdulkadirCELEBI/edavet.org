<script lang='ts'>
  import { authClient } from '$lib/auth-client'
  import { Eye, EyeOff, Loader2, Lock, Mail, User } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'
  import { fade } from 'svelte/transition'

  let name = $state('')
  let email = $state('')
  let password = $state('')
  let confirmPassword = $state('')
  let showPassword = $state(false)
  let loading = $state(false)
  let error = $state('')

  async function handleRegister() {
    if (!name || !email || !password) {
      error = 'Lütfen tüm alanları doldurun.'
      return
    }

    if (password.length < 8) {
      error = 'Şifre en az 8 karakter olmalıdır.'
      return
    }

    if (password !== confirmPassword) {
      error = 'Şifreler eşleşmiyor.'
      return
    }

    loading = true
    error = ''

    const { error: authError } = await authClient.signUp.email({
      email,
      password,
      name,
    })

    if (authError) {
      error = authError.message || 'Kayıt yapılamadı. Tekrar deneyin.'
      loading = false
      toast.error(error)
    }
    else {
      toast.success('Hesabınız oluşturuldu!')
      window.location.href = '/dashboard'
    }
  }
</script>

<div class='min-h-[90vh] flex items-center justify-center px-4 bg-base-100 py-12'>
  <div class='max-w-md w-full' in:fade>
    <div class='bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-200'>
      <div class='text-center mb-8'>
        <h1 class='text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-2'>Hesap Oluştur</h1>
        <p class='text-base-content/60'>Dijital davetiyelerinizi tasarlamaya başlayın</p>
      </div>

      {#if error}
        <div class='alert alert-error mb-6 py-2 rounded-xl text-sm gap-2'>
          <span>{error}</span>
        </div>
      {/if}

      <form onsubmit={(e) => {
        e.preventDefault()
        handleRegister()
      }} class='space-y-4'>
        <div class='form-control'>
          <label class='label pt-0' for='name'>
            <span class='label-text font-medium opacity-70'>Ad Soyad</span>
          </label>
          <div class='relative group'>
            <User class='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:text-primary transition-colors' />
            <input
              type='text'
              id='name'
              bind:value={name}
              placeholder='Adınız Soyadınız'
              class='input input-bordered w-full pl-12 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all rounded-xl'
              required
            />
          </div>
        </div>

        <div class='form-control'>
          <label class='label pt-0' for='email'>
            <span class='label-text font-medium opacity-70'>E-posta</span>
          </label>
          <div class='relative group'>
            <Mail class='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:text-primary transition-colors' />
            <input
              type='email'
              id='email'
              bind:value={email}
              placeholder='mail@ornek.com'
              class='input input-bordered w-full pl-12 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all rounded-xl'
              required
            />
          </div>
        </div>

        <div class='form-control'>
          <label class='label pt-0' for='password'>
            <span class='label-text font-medium opacity-70'>Şifre</span>
          </label>
          <div class='relative group'>
            <Lock class='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:text-primary transition-colors' />
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              bind:value={password}
              placeholder='En az 8 karakter'
              class='input input-bordered w-full pl-12 pr-12 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all rounded-xl'
              required
            />
          </div>
        </div>

        <div class='form-control'>
          <label class='label pt-0' for='confirmPassword'>
            <span class='label-text font-medium opacity-70'>Şifre Tekrar</span>
          </label>
          <div class='relative group'>
            <Lock class='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:text-primary transition-colors' />
            <input
              type={showPassword ? 'text' : 'password'}
              id='confirmPassword'
              bind:value={confirmPassword}
              placeholder='••••••••'
              class='input input-bordered w-full pl-12 pr-12 bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all rounded-xl'
              required
            />
            <button
              type='button'
              class='absolute right-4 top-1/2 -translate-y-1/2 hover:text-primary transition-colors p-1'
              onclick={() => showPassword = !showPassword}
            >
              {#if showPassword}
                <EyeOff class='w-5 h-5 opacity-40' />
              {:else}
                <Eye class='w-5 h-5 opacity-40' />
              {/if}
            </button>
          </div>
        </div>

        <button
          type='submit'
          class='btn btn-primary w-full rounded-xl shadow-lg shadow-primary/20 h-12 text-lg font-bold mt-4'
          disabled={loading}
        >
          {#if loading}
            <Loader2 class='w-5 h-5 animate-spin mr-2' />
            Kayıt Yapılıyor...
          {:else}
            Kayıt Ol
          {/if}
        </button>
      </form>

      <div class='divider my-8 opacity-50 text-xs uppercase tracking-widest'>VEYA</div>

      <p class='text-center text-sm'>
        Zaten hesabınız var mı?
        <a href='/login' class='text-primary font-bold hover:underline ml-1'>Giriş Yapın</a>
      </p>
    </div>
  </div>
</div>
