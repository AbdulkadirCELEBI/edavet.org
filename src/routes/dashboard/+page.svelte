<script lang='ts'>
  import { authClient } from '$lib/auth-client'
  import { addToCart, cart, clearCartLocal, removeFromCart } from '$lib/cart.svelte'
  import { Clock, Gift, LayoutDashboard, LogOut, Settings, Trash2, User } from '@lucide/svelte'
  import { toast } from 'svelte-sonner'
  import { fade } from 'svelte/transition'

  const { data } = $props()
  const session = $derived(data.session)

  async function handleRemove(id: string, label: string) {
    await removeFromCart(id)
    toast.success(`${label} listeden çıkarıldı.`)
  }

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
    { href: '/invitations/custom', label: 'Özelleştir (Kendin Tasarla)' },
  ]

  async function handleLogout() {
    await authClient.signOut()
    clearCartLocal()
    toast.success('Çıkış yapıldı')
    window.location.href = '/login'
  }

  function addToCartAndCheckout(link: { href: string, label: string }, event: Event) {
    event.preventDefault()
    event.stopPropagation()

    addToCart(link.label)

    toast.success(`${link.label} dökümanlarınıza eklendi!`, {
      description: 'Davetiyelerim listesinden düzenlemeye devam edebilirsiniz.',
    })

    // Modalı kapat
    const modal = document.getElementById('new_invitation_modal') as HTMLDialogElement
    if (modal)
      modal.close()
  }
</script>

{#if session}
  <div class='min-h-screen bg-base-200/50' in:fade>
    <div class='max-w-6xl mx-auto py-12 px-4'>
      <!-- Header -->
      <div class='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12'>
        <div>
          <h1 class='text-4xl font-bold tracking-tight mb-2'>Hoş Geldin, {session.user.name}!</h1>
          <p class='text-base-content/60'>Tüm davetiyelerini buradan yönetebilirsin.</p>
        </div>
        <button
          onclick={handleLogout}
          class='btn btn-error btn-outline rounded-xl gap-2 hover:bg-error hover:text-white transition-all shadow-lg shadow-error/10'
        >
          <LogOut class='w-4 h-4' />
          Çıkış Yap
        </button>
      </div>

      <!-- Stats Grid -->
      <div class='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        <div class='card bg-base-100 shadow-xl border border-base-200'>
          <div class='card-body'>
            <div class='flex items-center gap-4'>
              <div class='p-3 bg-primary/10 rounded-2xl'>
                <LayoutDashboard class='w-6 h-6 text-primary' />
              </div>
              <div>
                <p class='text-sm opacity-60'>Aktif Davetiyeler</p>
                <p class='text-2xl font-bold'>{cart.count}</p>
              </div>
            </div>
          </div>
        </div>

        <div class='card bg-base-100 shadow-xl border border-base-200'>
          <div class='card-body'>
            <div class='flex items-center gap-4'>
              <div class='p-3 bg-secondary/10 rounded-2xl'>
                <Gift class='w-6 h-6 text-secondary' />
              </div>
              <div>
                <p class='text-sm opacity-60'>Toplam RSVP</p>
                <p class='text-2xl font-bold'>0</p>
              </div>
            </div>
          </div>
        </div>

        <div class='card bg-base-100 shadow-xl border border-base-200'>
          <div class='card-body'>
            <div class='flex items-center gap-4'>
              <div class='p-3 bg-accent/10 rounded-2xl'>
                <Clock class='w-6 h-6 text-accent' />
              </div>
              <div>
                <p class='text-sm opacity-60'>Kalan Süre (Premium)</p>
                <p class='text-2xl font-bold'>Süresiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class='grid lg:grid-cols-3 gap-8'>
        <!-- Profile Card -->
        <div class='lg:col-span-1'>
          <div class='card bg-base-100 shadow-xl border border-base-200 sticky top-24'>
            <div class='card-body items-center text-center'>
              <div class='avatar avatar-online avatar-placeholder mb-4'>
                <div class='bg-primary text-primary-content rounded-full w-24 shadow-2xl ring-2 ring-primary ring-offset-base-100 ring-offset-2'>
                  {#if session.user.image}
                    <img src={session.user.image} alt={session.user.name} />
                  {:else}
                    <span class='text-3xl font-bold'>{session.user.name.charAt(0)}</span>
                  {/if}
                </div>
              </div>
              <h2 class='card-title text-xl mb-1'>{session.user.name}</h2>
              <p class='text-sm opacity-60 mb-6'>{session.user.email}</p>

              <div class='divider opacity-50'></div>

              <div class='w-full space-y-2'>
                <a href='/profile' class='btn btn-ghost btn-block justify-start gap-4 rounded-xl hover:bg-base-200'>
                  <User class='w-5 h-5 opacity-60' /> Profile Ayarları
                </a>
                <button class='btn btn-ghost btn-block justify-start gap-4 rounded-xl hover:bg-base-200'>
                  <Settings class='w-5 h-5 opacity-60' /> Hesap Ayarları
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity / Invitations List -->
        <div class='lg:col-span-2'>
          <div class='card bg-base-100 shadow-xl border border-base-200 min-h-[500px]'>
            <div class='card-body'>
              <div class='flex items-center justify-between mb-6'>
                <h3 class='card-title text-xl m-0'>Davetiyelerim</h3>
                <button
                  class='btn btn-primary btn-sm rounded-lg shadow-primary/20 shadow-lg'
                  onclick={() => (document.getElementById('new_invitation_modal') as HTMLDialogElement)?.showModal()}
                >
                  Yeni Oluştur
                </button>
              </div>

              {#if cart.items.length === 0}
                <div class='flex flex-col items-center justify-center py-20 text-center opacity-40'>
                  <div class='p-6 bg-base-200 rounded-full mb-4'>
                    <LayoutDashboard class='w-12 h-12' />
                  </div>
                  <p class='text-lg font-medium'>Henüz bir davetiye oluşturmadın.</p>
                </div>
              {:else}
                <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {#each cart.items as item}
                    <div class='card bg-base-100 border border-base-200 shadow-sm hover:border-primary/30 transition-all overflow-hidden flex flex-col'>
                      <!-- Resim Alanı (Demo placeholder) -->
                      <div class='h-32 bg-base-200 relative w-full border-b border-base-200 overflow-hidden'>
                        <img src='https://images.unsplash.com/photo-1544591461-1c1cc153c30a?q=80&w=400&auto=format&fit=crop' alt='Davetiye Demo' class='w-full h-full object-cover' />
                        <div class='absolute top-2 right-2'>
                          <div class='badge badge-primary font-bold text-xs uppercase shadow-sm'>Taslak</div>
                        </div>
                      </div>

                      <div class='card-body p-4 flex flex-col justify-between grow'>
                        <div>
                          <h4 class='font-bold text-lg mb-1 leading-tight'>{item.label}</h4>
                          <p class='text-xs text-base-content/60 flex items-center gap-1 mb-4'>
                            <Clock class='w-3 h-3' /> Son güncellenme: Bugün
                          </p>
                        </div>

                        <div class='card-actions justify-end mt-auto gap-2'>
                          <button
                            onclick={() => handleRemove(item.id, item.label)}
                            class='btn btn-error btn-outline btn-sm rounded-md'
                            title='Listeden Çıkar'
                          >
                            <Trash2 class='w-4 h-4' />
                          </button>
                          <a href='/order' class='btn btn-primary btn-sm rounded-md grow'>Sepete Git</a>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Yeni Davetiye Modal -->
  <dialog id='new_invitation_modal' class='modal modal-bottom sm:modal-middle'>
    <div class='modal-box p-0 sm:rounded-3xl border border-base-200 shadow-2xl'>
      <div class='p-6 pb-2'>
        <h3 class='font-bold text-2xl text-primary'>Davetiye Türünü Seçin</h3>
        <p class='py-2 text-base-content/70'>Nasıl bir davetiye tasarlamak istersiniz?</p>
      </div>

      <div class='max-h-[60vh] overflow-y-auto w-full'>
        <ul class='menu w-full p-4 gap-2'>
          {#each invitationLinks as link}
            <li class='flex flex-row p-0 items-stretch bg-base-100 rounded-xl hover:bg-primary/5 transition-colors group relative overflow-hidden'>
              <a href={link.href} class='grow p-4 text-lg font-medium hover:bg-transparent bg-transparent!'>
                {link.label}
              </a>
              <button
                class='px-5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20! tooltip tooltip-left flex items-center justify-center z-10'
                data-tip='Hemen Satın Al'
                onclick={e => addToCartAndCheckout(link, e)}
              >
                <div class='p-2 bg-primary/10 rounded-full group-hover/btn:bg-primary/20 group-hover/btn:scale-110 transition-all'>
                  <Gift class='w-5 h-5 text-primary' />
                </div>
              </button>
            </li>
          {/each}
        </ul>
      </div>

      <div class='modal-action p-6 pt-0 mt-0'>
        <form method='dialog' class='w-full'>
          <button class='btn btn-outline btn-block rounded-xl'>İptal</button>
        </form>
      </div>
    </div>
    <form method='dialog' class='modal-backdrop'>
      <button>Kapat</button>
    </form>
  </dialog>
{/if}
