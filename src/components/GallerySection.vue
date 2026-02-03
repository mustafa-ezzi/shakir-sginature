<template>
  <section id="gallery" class="relative py-24 bg-[#FAF9F6] overflow-hidden">
    
    <div class="absolute top-10 left-10 pointer-events-none select-none opacity-[0.03]">
      <span class="text-[15vw] font-serif italic leading-none text-stone-900">Collection</span>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 relative z-10">
      
      <div class="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-12">
        <div class="max-w-xl">
          <h2 class="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold mb-4">Meticulously Crafted</h2>
          <p class="text-4xl md:text-6xl font-serif italic text-stone-900">Visual Stories</p>
        </div>
        <p class="text-stone-400 text-[10px] tracking-[0.3em] uppercase max-w-[200px] leading-relaxed">
          Explore the harmony of traditional silhouettes and modern aesthetics.
        </p>
      </div>

      <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div 
          v-for="(item, index) in lightboxImages" 
          :key="index"
          class="gallery-card break-inside-avoid group cursor-pointer relative overflow-hidden bg-stone-100"
          @click="openLightbox(index)"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="item.src" 
              class="w-full h-auto object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              :alt="item.title"
            />
            
            <div class="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
              <div class="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p class="text-[9px] tracking-[0.4em] uppercase text-brand-gold font-bold mb-2">{{ item.tag }}</p>
                <h3 class="text-2xl font-serif italic text-white leading-tight">{{ item.title }}</h3>
                <div class="w-0 group-hover:w-12 h-px bg-white/50 mt-4 transition-all duration-700 delay-100"></div>
              </div>
            </div>
          </div>
          
          <div class="md:hidden pt-4 px-2">
            <p class="text-[8px] tracking-widest text-brand-gold uppercase">{{ item.tag }}</p>
            <p class="text-sm font-serif italic">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="mt-24 text-center">
  <router-link 
    to="/lookbook" 
    class="group relative inline-block py-4 px-12 overflow-hidden border border-stone-300"
  >
    <span class="relative z-10 text-[10px] tracking-[0.5em] uppercase font-bold text-stone-900 group-hover:text-white transition-colors duration-500">
      View Full Lookbook
    </span>
    <div class="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
  </router-link>
</div>
    </div>

    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12" @click="closeLightbox">
        <button class="absolute top-10 right-10 text-stone-900 hover:text-brand-gold transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="1.5"/></svg>
        </button>
        
        <div class="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center" @click.stop>
          <img :src="lightboxImages[currentLightboxIndex].src" class="w-full md:w-2/3 h-auto shadow-2xl" />
          <div class="w-full md:w-1/3">
            <span class="text-brand-gold text-xs tracking-widest uppercase font-bold">{{ lightboxImages[currentLightboxIndex].tag }}</span>
            <h2 class="text-4xl font-serif italic text-stone-900 mt-4 mb-6">{{ lightboxImages[currentLightboxIndex].title }}</h2>
<p class="text-stone-500 font-light leading-relaxed mb-8">
  {{ lightboxImages[currentLightboxIndex].description }}
</p>
<a :href="getWhatsAppLink(lightboxImages[currentLightboxIndex].title)" target="_blank" class="text-[10px] tracking-[0.3em] uppercase font-black border-b border-stone-900 pb-1">
                Inquire for Custom Fit
              </a>            
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const lightboxOpen = ref(false);
const currentLightboxIndex = ref(0);
const getWhatsAppLink = (title) => {
  const message = `Hello,

I hope you’re doing well. I’m contacting you to inquire about your services and would like to understand the pricing, delivery timeline, and next steps of this rida: ${title}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/923212600644?text=${encodedMessage}`;
};
const lightboxImages = [
  {
    src: '/blood-red.jpeg',
    title: 'Blood Red',
    tag: 'Royal Edition',
    description: 'A bold design with rich tones and soft contrast panels. Made to stand out while staying elegant.'
  },
  {
    src: '/deep-teal.jpeg',
    title: 'Deep Teal Green',
    tag: 'Nature Series',
    description: 'Fresh colors inspired by nature, balanced with calm tones for a relaxed and graceful look.'
  },
  {
    src: '/double-pink.jpeg',
    title: 'Double Shaded Pink',
    tag: 'Romantic Silk',
    description: 'Delicate lace details paired with smooth fabric, creating a soft and romantic feel.'
  },
  {
    src: '/mocha-brown.jpeg',
    title: 'Mocha Brown',
    tag: 'Minimalist',
    description: 'Warm earthy shades with a clean design. Simple, timeless, and easy to wear.'
  },
  {
    src: '/ocean-guilt.jpeg',
    title: 'Ocean Guilt',
    tag: 'Evening Wear',
    description: 'A deep blue tone with a smooth finish, perfect for evening gatherings and special moments.'
  },
  {
    src: '/pastel-lavender.jpeg',
    title: 'Pastel Lavender',
    tag: 'Summer Breeze',
    description: 'Light lavender shades designed for comfort, softness, and warm summer days.'
  },
  
];


const openLightbox = (index) => {
  currentLightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};
</script>

<style scoped>
.brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.gallery-card {
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Staggered entrance animation for the items */
@keyframes reveal-card {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.gallery-card {
  animation: reveal-card 1s ease forwards;
  animation-delay: calc(var(--index, 0) * 100ms);
}
</style>