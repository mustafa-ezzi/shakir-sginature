<template>
  <footer class="relative bg-[#0F0F0F] pt-24 pb-12 overflow-hidden border-t border-white/5">
    <!-- Big faint logo in the background -->
    <div class="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.02]">
      <span class="text-[20vw] font-serif italic leading-none text-white">Shakir</span>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        
        <!-- Brand Info -->
        <div class="md:col-span-5 space-y-8">
          <div class="text-3xl font-serif italic text-brand-gold tracking-tight">Shakir Signature Styles</div>
          <p class="text-stone-500 text-sm font-light leading-relaxed max-w-sm">
            Combining classic Rida shapes with modern, simple styles. Every piece is made with care and timeless elegance.
          </p>
          <div class="flex items-center space-x-6 pt-4">
            <a href="https://www.instagram.com/Shakirsignaturestyles/" class="group flex items-center space-x-3 text-stone-400 hover:text-brand-gold transition-all duration-500">
              <span class="text-[10px] uppercase tracking-[0.3em]">Instagram</span>
              <div class="w-8 h-px bg-stone-800 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-500"></div>
            </a>
            <a href="#" class="group flex items-center space-x-3 text-stone-400 hover:text-brand-gold transition-all duration-500">
              <span class="text-[10px] uppercase tracking-[0.3em]">WhatsApp</span>
              <div class="w-8 h-px bg-stone-800 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-500"></div>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="md:col-span-3 space-y-6">
          <h4 class="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Navigation</h4>
          <ul class="space-y-4">
            <li v-for="link in ['Home', 'Featured', 'Gallery', 'Lookbook', 'Contact']" :key="link">
              <router-link 
                :to="link === 'Home' ? '/' : '/' + link.toLowerCase()" 
                class="text-stone-500 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300"
              >
                {{ link }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Location + Back to Top -->
        <div class="md:col-span-4 space-y-6 text-left">
          <h4 class="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Shakir Signature Styles</h4>
          <p class="text-stone-500 text-xs tracking-[0.2em] leading-loose uppercase">
            Karachi, Sindh<br/>
            Pakistan
          </p>
          <div class="pt-4">
            <button @click="scrollToTop" class="group flex items-center space-x-4">
              <div class="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                <svg class="w-4 h-4 text-stone-400 group-hover:text-brand-gold transform group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span class="text-stone-500 group-hover:text-white text-[9px] uppercase tracking-[0.4em] transition-colors">Back to top</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[9px] uppercase tracking-[0.4em] text-stone-600">
          © {{ currentYear }} Shakir Styles • All Rights Reserved
        </p>
        <div class="flex items-center space-x-8 text-stone-600 text-[9px] uppercase tracking-[0.4em]">
          <a href="#" class="hover:text-stone-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-stone-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.text-brand-gold { color: #C9A961; }

footer {
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(to bottom, #111111 0%, #0F0F0F 100%);
}

/* Simple hover underline for links */
li a {
  position: relative;
  display: inline-block;
}

li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: #C9A961;
  transition: width 0.4s ease;
}

li a:hover::after {
  width: 100%;
}
</style>
