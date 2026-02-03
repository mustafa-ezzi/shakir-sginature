<template>
  <section id="lookbook" class="bg-[#faf9f6] py-24 md:py-40">
    <div class="max-w-[1600px] mx-auto px-6">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <span class="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-black block mb-4">Visual Journal</span>
          <h2 class="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight">
            The <span class="text-brand-gold">Collection</span>
          </h2>
        </div>
        
        <div class="flex flex-wrap gap-4 md:gap-8 border-b border-stone-200 pb-2 w-full md:w-auto">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            class="text-[10px] uppercase tracking-[0.3em] transition-all duration-500 pb-2 relative"
            :class="activeCategory === cat ? 'text-brand-gold font-bold' : 'text-stone-400 hover:text-stone-900'"
          >
            {{ cat }}
            <span v-if="activeCategory === cat" class="absolute bottom-0 left-0 w-full h-px bg-brand-gold animate-in fade-in"></span>
          </button>
        </div>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <div 
          v-for="(rida, index) in filteredRidas" 
          :key="index"
          class="break-inside-avoid group cursor-pointer relative overflow-hidden bg-white"
          @click="openLightbox(index)"
        >
          <div class="relative overflow-hidden aspect-[3/4]">
            <img 
              :src="rida.src" 
              :alt="rida.title"
              class="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            
            <div class="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span class="text-brand-gold text-[9px] uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {{ rida.tag }}
              </span>
              <h3 class="text-white font-serif italic text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {{ rida.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Transition name="fade">
        <div v-if="selectedImage !== null" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div class="absolute inset-0 bg-stone-950/95 backdrop-blur-sm" @click="closeLightbox"></div>
          
          <div class="relative z-10 w-full max-w-6xl grid md:grid-cols-2 bg-white overflow-hidden animate-slide-up">
            <button @click="closeLightbox" class="absolute top-6 right-6 z-20 text-stone-400 hover:text-stone-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div class="h-[50vh] md:h-[80vh] overflow-hidden">
              <img :src="filteredRidas[selectedImage].src" class="w-full h-full object-cover" />
            </div>

            <div class="p-10 md:p-20 flex flex-col justify-center bg-[#faf9f6]">
              <span class="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-black mb-6 block">
                {{ filteredRidas[selectedImage].tag }}
              </span>
              <h2 class="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8">
                {{ filteredRidas[selectedImage].title }}
              </h2>
              <div class="w-12 h-px bg-brand-gold mb-8"></div>
              <p class="text-stone-600 leading-relaxed font-light mb-12">
                {{ filteredRidas[selectedImage].description }}
              </p>
              
              <a href="https://wa.me/yourlink" target="_blank" class="inline-block border border-stone-900 px-10 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-stone-900 hover:text-white transition-all duration-500 text-center">
                Inquire About Piece
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('All');
const selectedImage = ref(null);

const categories = ['All', 'Royal Edition', 'Nature Series', 'Summer Breeze', 'Evening Wear', 'Minimalist', 'Statement'];

const lightboxImages = [
  { src: '/blood-red.jpeg', title: 'Ivory Contrast Panels', tag: 'Royal Edition', description: 'A bold design with rich tones and soft contrast panels. Made to stand out while staying elegant.' },
  { src: '/deep-teal.jpeg', title: 'Soft Mint Accents', tag: 'Nature Series', description: 'Fresh colors inspired by nature, balanced with calm tones for a relaxed and graceful look.' },
  { src: '/double-pink.jpeg', title: 'Intricate Black Lace', tag: 'Romantic Silk', description: 'Delicate lace details paired with smooth fabric, creating a soft and romantic feel.' },
  { src: '/mocha-brown.jpeg', title: 'Earthy Textures', tag: 'Minimalist', description: 'Warm earthy shades with a clean design. Simple, timeless, and easy to wear.' },
  { src: '/ocean-guilt.jpeg', title: 'Deep Blue Velvet', tag: 'Evening Wear', description: 'A deep blue tone with a smooth finish, perfect for evening gatherings and special moments.' },
  { src: '/pastel-lavender.jpeg', title: 'Soft Lavender Flow', tag: 'Summer Breeze', description: 'Light lavender shades designed for comfort, softness, and warm summer days.' },
  { src: '/pink-jodi.jpeg', title: 'Blush Harmony', tag: 'Summer Breeze', description: 'Gentle pink tones blended for a calm and balanced look with a modern touch.' },
  { src: '/soft-pink.jpeg', title: 'Powder Pink Grace', tag: 'Summer Breeze', description: 'A soft pink shade that feels light, airy, and perfect for everyday elegance.' },
  { src: '/antique-mehroon.jpeg', title: 'Classic Mehroon', tag: 'Heritage', description: 'A deep traditional color inspired by classic styles, refined for modern wear.' },
  { src: '/baby-blue.jpeg', title: 'Calm Blue Ease', tag: 'Day Wear', description: 'A gentle blue tone that feels fresh, relaxed, and comfortable throughout the day.' },
  { src: '/blush-peach.jpeg', title: 'Peach Softness', tag: 'Spring Edit', description: 'Warm peach tones that bring softness and warmth to a clean, modern silhouette.' },
  { src: '/corn-yellow.jpeg', title: 'Golden Daylight', tag: 'Bright Edit', description: 'A cheerful yellow shade designed to feel bright, positive, and full of life.' },
  { src: '/egypt-blue.jpeg', title: 'Royal Blue Calm', tag: 'Statement', description: 'A strong blue color balanced with smooth fabric for a confident yet calm look.' },
  { src: '/mageta-purple.jpeg', title: 'Soft Plum Touch', tag: 'Evening Edit', description: 'A gentle purple shade that adds depth and elegance without feeling heavy.' },
  { src: '/pine-green.jpeg', title: 'Forest Green Balance', tag: 'Nature Series', description: 'Inspired by deep green tones, designed for a grounded and peaceful appearance.' },
  { src: '/stone-white.jpeg', title: 'Pure Stone White', tag: 'Essential', description: 'A clean white look that feels fresh, simple, and timeless in every setting.' }
];

const filteredRidas = computed(() => {
  if (activeCategory.value === 'All') return lightboxImages;
  return lightboxImages.filter(img => img.tag === activeCategory.value);
});

const openLightbox = (index) => { selectedImage.value = index; document.body.style.overflow = 'hidden'; };
const closeLightbox = () => { selectedImage.value = null; document.body.style.overflow = 'auto'; };
</script>

<style scoped>
.text-brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.animate-slide-up {
  animation: slideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scrollbar styling for a cleaner look */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #faf9f6; }
::-webkit-scrollbar-thumb { background: #C9A961; }
</style>