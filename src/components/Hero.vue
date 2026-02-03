<template>
  <section 
    id="hero" 
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9f6]"
    @mousemove="handleMouseMove"
  >
    <!-- Background Layers -->
    <div class="absolute inset-0 z-0">
      <!-- Animated Blobs -->
      <div class="absolute inset-0 opacity-40 mix-blend-multiply transition-transform duration-700 ease-out" :style="parallaxStyle">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>
      
      <!-- Halftone Dot Pattern -->
      <div class="absolute inset-0 opacity-[0.08] pointer-events-none halftone-pattern"></div>
      
      <!-- Scattered Dots Pattern -->
      <div class="absolute inset-0 opacity-[0.12] pointer-events-none dots-pattern"></div>
      
      <!-- Grain Texture -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <!-- Geometric Grid Lines -->
      <div class="absolute inset-0 flex justify-between px-6 sm:px-12 md:px-24 opacity-10">
        <div class="w-px h-full bg-stone-900"></div>
        <div class="hidden sm:block w-px h-full bg-stone-900"></div>
        <div class="w-px h-full bg-stone-900"></div>
      </div>

      <!-- Decorative Corner Elements -->
      <div class="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/20 opacity-40"></div>
      <div class="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/20 opacity-40 hidden md:block"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        <!-- Left Content -->
        <div class="lg:col-span-8 flex flex-col items-start text-left">
          <div class="overflow-hidden mb-2 md:mb-4">
            <span class="block text-stone-400 uppercase tracking-[0.5em] sm:tracking-[0.8em] text-[9px] sm:text-[10px] font-bold fade-in-up">
              Est. 2023 / Crafted with Care
            </span>
          </div>
          
          <h1 class="hero-title leading-[0.85] text-stone-900 w-full">
            <span class="reveal-container block">
              <span class="reveal-text italic-serif">Shakir</span>
            </span>
            <span class="reveal-container block translate-x-6 sm:translate-x-12 md:translate-x-16 lg:translate-x-24">
              <span class="reveal-text text-gold">Signature Styles.</span>
            </span>
          </h1>
        </div>

        <!-- Right Card -->
        <div class="lg:col-span-4 mt-8 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end w-full">
          <div class="glass-card p-6 sm:p-8 md:p-10 lg:p-12 fade-in delay-1000 w-full max-w-md lg:max-w-none">
            <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div class="h-px w-8 sm:w-12 bg-gold"></div>
              <span class="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-widest text-stone-500">
                Collection 2023
              </span>
            </div>
            
            <p class="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light">
              A modern take on clean silhouettes and elegant Rida design. Made for those who value simplicity and style.
            </p>

            <button 
              @click="scrollToFeatured" 
              class="cta-button w-full group py-4 sm:py-5 border border-stone-900 overflow-hidden relative hover:border-gold transition-colors duration-300"
            >
              <span class="relative z-10 text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase font-black transition-colors duration-500 group-hover:text-white">
                Explore Collection
              </span>
              <div class="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <!-- Corner accents on button -->
              <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 sm:bottom-12 right-6 sm:right-12 hidden md:flex flex-col items-center gap-4 sm:gap-6 fade-in delay-1400">
      <span class="vertical-text text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-stone-400">
        STYLES  
      </span>
      <div class="w-px h-16 sm:h-20 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
    </div>

    <!-- Mobile Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center gap-3 fade-in delay-1400">
      <div class="w-6 h-10 border-2 border-stone-400/40 rounded-full flex items-start justify-center p-2">
        <div class="w-1 h-2 bg-gold rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const mousePos = ref({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  mousePos.value = {
    x: (e.clientX / window.innerWidth - 0.5) * 40,
    y: (e.clientY / window.innerHeight - 0.5) * 40
  };
};

const parallaxStyle = computed(() => ({
  transform: `translate3d(${mousePos.value.x}px, ${mousePos.value.y}px, 0)`
}));

const scrollToFeatured = () => {
  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
/* ===== TYPOGRAPHY ===== */
.hero-title {
  font-size: clamp(2.5rem, 10vw + 1rem, 9rem);
  font-family: 'Playfair Display', serif;
  line-height: 0.85;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: clamp(3.5rem, 12vw, 9rem);
  }
}

.italic-serif {
  font-style: italic;
  font-weight: 400;
}

.reveal-container {
  overflow: hidden;
}

.reveal-text {
  display: block;
  transform: translateY(110%);
  animation: revealUp 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.reveal-container:nth-child(1) .reveal-text { animation-delay: 0.2s; }
.reveal-container:nth-child(2) .reveal-text { animation-delay: 0.4s; }

@keyframes revealUp {
  to { transform: translateY(0); }
}

/* ===== PRINTED PATTERNS ===== */

/* Halftone Dot Pattern */
.halftone-pattern {
  background-image: 
    radial-gradient(circle, #C9A961 1px, transparent 1px),
    radial-gradient(circle, #B8860B 1px, transparent 1px);
  background-size: 20px 20px, 30px 30px;
  background-position: 0 0, 10px 10px;
}

/* Scattered Dots Pattern */
.dots-pattern {
  background-image: 
    radial-gradient(circle at 20% 30%, #C9A961 2px, transparent 2px),
    radial-gradient(circle at 60% 70%, #B8860B 1.5px, transparent 1.5px),
    radial-gradient(circle at 80% 10%, #C9A961 1px, transparent 1px),
    radial-gradient(circle at 30% 80%, #B8860B 2px, transparent 2px),
    radial-gradient(circle at 90% 50%, #C9A961 1.5px, transparent 1.5px),
    radial-gradient(circle at 10% 60%, #B8860B 1px, transparent 1px);
  background-size: 100px 100px;
  animation: driftDots 60s linear infinite;
}

@keyframes driftDots {
  0% { background-position: 0 0; }
  100% { background-position: 100px 100px; }
}

/* ===== GLASS CARD ===== */
.glass-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(201, 169, 97, 0.05);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  box-shadow: 
    0 30px 60px -15px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(201, 169, 97, 0.1);
  transform: translateY(-2px);
}

/* ===== BACKGROUND BLOBS ===== */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px) saturate(150%);
  animation: blobFloat 20s ease-in-out infinite;
}

@media (min-width: 768px) {
  .blob {
    filter: blur(100px) saturate(150%);
  }
}

.blob-1 {
  width: 70vw;
  max-width: 800px;
  height: 70vw;
  max-height: 800px;
  background: radial-gradient(circle, rgba(201, 169, 97, 0.35) 0%, transparent 70%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 50vw;
  max-width: 600px;
  height: 50vw;
  max-height: 600px;
  background: radial-gradient(circle, rgba(184, 134, 11, 0.25) 0%, transparent 70%);
  bottom: -10%;
  right: -5%;
  animation-delay: -10s;
}

@keyframes blobFloat {
  0%, 100% { 
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  33% { 
    transform: translate(30px, -30px) scale(1.1) rotate(5deg);
  }
  66% { 
    transform: translate(-20px, 20px) scale(0.95) rotate(-5deg);
  }
}

/* ===== UTILITIES ===== */
.vertical-text {
  writing-mode: vertical-rl;
}

.text-gold { color: #C9A961; }
.bg-gold { background-color: #C9A961; }
.border-gold { border-color: #C9A961; }

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.delay-1000 { animation-delay: 1s; }
.delay-1400 { animation-delay: 1.4s; }

/* Mobile Scroll Animation */
@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

/* ===== RESPONSIVE IMPROVEMENTS ===== */
@media (max-width: 640px) {
  .hero-title .reveal-container:nth-child(2) {
    margin-top: 0.5rem;
  }
}

@media (max-width: 1023px) {
  .glass-card {
    max-width: 600px;
    margin: 0 auto;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .reveal-text,
  .fade-in-up,
  .fade-in {
    opacity: 1;
    transform: none;
  }
  
  .dots-pattern {
    animation: none;
  }
}

/* ===== TOUCH DEVICE OPTIMIZATIONS ===== */
@media (hover: none) and (pointer: coarse) {
  .glass-card:hover {
    transform: none;
  }
  
  .cta-button:active {
    transform: scale(0.98);
  }
}

/* ===== PERFORMANCE OPTIMIZATIONS ===== */
.blob,
.halftone-pattern,
.dots-pattern {
  will-change: transform;
}
</style>