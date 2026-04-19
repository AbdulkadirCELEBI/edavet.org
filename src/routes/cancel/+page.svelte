<script lang='ts'>
  import { XCircle } from '@lucide/svelte'
</script>

<div class='min-h-[70vh] flex items-center justify-center bg-base-100 p-4'>
  <div class='max-w-md w-full bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200 text-center'>
    <div class='w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6'>
      <XCircle class='w-10 h-10 text-error' />
    </div>
    <h1 class='text-3xl font-bold mb-4'>Ödeme İptal Edildi</h1>
    <p class='text-base-content/70 mb-8'>
      Ödeme işlemini yarıda bıraktınız veya bir sorun oluştu. Siparişiniz iptal edildi. Sepetinize dönüp tekrar deneyebilirsiniz.
    </p>
    <a href='/order' class='btn btn-neutral w-full rounded-xl'>
      Siparişe Geri Dön
    </a>
  </div>
</div>
