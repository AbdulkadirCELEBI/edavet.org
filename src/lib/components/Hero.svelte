<div class='hero min-h-[90vh] bg-base-100 overflow-hidden relative'>
  <!-- Premium Arka Plan Gorseli -->
  <div class='absolute inset-0 z-0 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500' style="background-image: url('/premium_hero_bg.png'); opacity: var(--hero-opacity); mix-blend-mode: var(--hero-blend);"></div>

  <div class='absolute inset-0 z-0 bg-linear-to-b from-transparent to-base-100/90'></div>

  <div class='hero-content text-center z-10 w-full max-w-6xl flex-col lg:flex-row lg:text-left gap-12 mt-10'>
    <div class='max-w-xl lg:max-w-2xl'>
      <div class='badge badge-outline border-primary/40 bg-primary/5 text-primary mb-6 py-4 px-6 font-medium premium-glow rounded-full'>
        ✨ Kusursuz Anlar İçin Tasarlandı
      </div>

      <h1 class='text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tighter leading-[1.1] text-base-content'>
        En Özel Gününüze <br />
        <span class='font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent premium-text-glow italic pr-4'>
          Unutulmaz Davet
        </span>
      </h1>

      <p class='py-6 text-lg md:text-xl text-base-content/60 leading-relaxed font-light'>
        Apple sadeliği ile düğün şıklığının buluştuğu nokta. Canlı haritalar, LCV biletleri ve eşsiz galeriler ile premium dijital davetiye deneyimi yaşayın.
      </p>

      <div class='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8'>
        <a href='/invitations/wedding' class='btn btn-primary btn-lg px-8 shadow-xl shadow-primary/30 hover:scale-105 transition-all text-primary-content rounded-full font-medium border-none'>
          Tasarlamaya Başla
        </a>
        <a href='/pricing' class='btn btn-ghost btn-lg px-8 group text-base-content/70 hover:bg-base-200/50 rounded-full'>
          Örnekleri İncele
          <span class='group-hover:translate-x-1 transition-transform'>→</span>
        </a>
      </div>
    </div>

    <!-- Interactive Demo Area (Mockup Focus) -->
    <div class='hidden lg:flex relative w-full max-w-sm ml-auto items-center justify-center'>
      <div class='absolute w-[300px] h-[300px] bg-secondary/20 blur-[80px] rounded-full z-0'></div>
      <div class='relative z-10 w-[280px] h-[550px] premium-glass rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-start p-4 border-[3px] border-white/40 overflow-hidden transform group hover:rotate-y-[10deg] transition-transform duration-700 perspective-1000'>
        <!-- Mock Phone Notch -->
        <div class='w-24 h-6 bg-base-content/10 rounded-full mb-6'></div>
        <!-- Mock Invite Content -->
        <div class='w-full h-40 bg-cover bg-center rounded-2xl shadow-inner relative overflow-hidden mb-4' style="background-image: url('https://images.unsplash.com/photo-1544591461-1c1cc153c30a?q=80&w=400&fit=crop');">
          <div class='absolute inset-0 bg-black/20'></div>
          <div class='absolute inset-0 flex flex-col justify-end p-4 text-white'>
            <h3 class='font-serif text-xl italic'>Aylin & Caner</h3>
            <p class='text-xs opacity-80'>14 Eylül 2026</p>
          </div>
        </div>
        <!-- Feature cards mimicking micro-animations -->
        <div class='w-full bg-base-100/60 rounded-xl p-3 mb-2 flex items-center justify-between group-hover:bg-primary/5 transition-colors cursor-pointer'>
          <div class='flex flex-col text-left'>
            <span class='text-sm font-bold text-base-content'>RSVP Katılım</span>
            <span class='text-[10px] text-base-content/50'>Lütfen yanıt veriniz</span>
          </div>
          <div class='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>✓</div>
        </div>
        <div class='w-full bg-base-100/60 rounded-xl p-3 flex flex-col text-left gap-1 hover:bg-base-100 transition-colors'>
          <span class='text-xs font-bold text-base-content/60'>Konum</span>
          <div class='w-full h-20 bg-secondary/20 rounded-md border border-white/50 bg-cover bg-center opacity-80' style="background-image: url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&fit=crop');"></div>
        </div>
      </div>
    </div>
  </div>
</div>
