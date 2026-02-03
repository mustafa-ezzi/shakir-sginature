<template>
  <section id="bespoke" class="relative bg-[#0F0F0F] text-white py-28 md:py-40 overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-stone-800/20 blur-[120px] rounded-full"></div>
      
      <div class="absolute inset-0 opacity-[0.03]" 
           style="background-image: radial-gradient(#C9A961 0.5px, transparent 0.5px); background-size: 30px 30px;">
      </div>
    </div>
    
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div class="flex flex-col items-center">
        <div class="inline-flex items-center space-x-4 mb-8">
          <span class="h-px w-8 bg-brand-gold/50"></span>
          <span class="text-brand-gold text-[10px] tracking-[0.8em] uppercase font-black">The Atelier Experience</span>
          <span class="h-px w-8 bg-brand-gold/50"></span>
        </div>

        <h2 class="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-10 leading-[1.1] text-center">
          Tailored to your <br>
          <span class="text-brand-gold">Unique Narrative.</span>
        </h2>

        <p class="text-stone-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-center font-light tracking-wide mb-20">
          From the initial sketch to the final stitch, we collaborate with you to select 
          exclusive laces and silks, ensuring a silhouette that is unmistakably yours.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden bg-white/[0.02] backdrop-blur-sm mb-20">
          
          <div class="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.03] transition-colors duration-500">
            <div class="w-12 h-12 mb-8 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
              <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-white text-xs tracking-[0.3em] uppercase font-bold mb-4">Curated Materials</h3>
            <p class="text-stone-500 text-xs leading-loose uppercase tracking-widest">Hand-selected French laces & Grade-A silks.</p>
          </div>

          <div class="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.03] transition-colors duration-500">
            <div class="w-12 h-12 mb-8 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
              <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121"></path>
              </svg>
            </div>
            <h3 class="text-white text-xs tracking-[0.3em] uppercase font-bold mb-4">Precision Fit</h3>
            <p class="text-stone-500 text-xs leading-loose uppercase tracking-widest">Master tailoring adjusted to your exact measurements.</p>
          </div>

          <div class="p-10 md:p-14 group hover:bg-white/[0.03] transition-colors duration-500">
            <div class="w-12 h-12 mb-8 border border-brand-gold/30 flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
              <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-white text-xs tracking-[0.3em] uppercase font-bold mb-4">Final Flourish</h3>
            <p class="text-stone-500 text-xs leading-loose uppercase tracking-widest">Bespoke embroidery and signature finishes.</p>
          </div>
        </div>

        <div class="relative group">
          <a href="https://wa.me/923212600644" target="_blank" 
             class="relative z-10 flex items-center space-x-6 px-12 py-6 bg-brand-gold text-stone-900 text-[10px] tracking-[0.5em] font-black uppercase transition-all duration-500 group-hover:bg-white">
            <span>Consult our Atelier</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div class="absolute inset-0 bg-brand-gold/20 blur-xl translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }
.border-brand-gold { border-color: #C9A961; }

/* Custom Font Smoothing for dark backgrounds */
h2, p, span {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 8s infinite ease-in-out;
}
</style>