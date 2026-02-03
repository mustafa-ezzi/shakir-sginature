<template>
  <!-- Main Navigation -->
  <nav 
    id="navbar" 
    :class="[
      'fixed w-full z-50 transition-all duration-500',
      isHidden ? 'nav-hidden' : 'nav-visible',
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200' : 'bg-transparent border-b border-white/10'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex justify-between items-center py-3 md:py-4 lg:py-5">
        
        <!-- Logo -->
        <a href="#hero" class="flex items-center group" @click="scrollToSection">
          <div class="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex items-center">
            <img 
              src="/logo.png" 
              alt="Shakir Style Logo"
              class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8 xl:space-x-12">
          <a 
            v-for="link in navLinks" 
            :key="link.href" 
            :href="link.href"
            @click="scrollToSection"
            class="relative text-[10px] xl:text-[11px] uppercase tracking-[0.3em] font-bold text-stone-800 hover:text-brand-gold transition-colors duration-300 py-2 group"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Desktop CTA Button -->
        <div class="hidden lg:block">
          <a 
            href="#contact" 
            @click="scrollToSection"
            class="group relative overflow-hidden px-6 xl:px-8 py-2.5 xl:py-3 border-2 border-stone-900 bg-transparent hover:bg-stone-900 transition-all duration-500"
          >
            <span class="relative z-10 text-[9px] xl:text-[10px] tracking-[0.4em] uppercase font-bold text-stone-900 group-hover:text-white transition-colors duration-500">
              Get in Touch
            </span>
            <div class="absolute inset-0 bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>

        <!-- Mobile & Tablet Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
          aria-label="Toggle menu"
        >
          <div class="relative w-6 h-5 flex flex-col justify-between">
            <span 
              :class="[
                'block h-0.5 w-full bg-stone-900 transition-all duration-300 origin-center',
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              ]"
            ></span>
            <span 
              :class="[
                'block h-0.5 w-full bg-stone-900 transition-all duration-300',
                mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
              ]"
            ></span>
            <span 
              :class="[
                'block h-0.5 w-full bg-stone-900 transition-all duration-300 origin-center',
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              ]"
            ></span>
          </div>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  <transition name="mobile-menu">
    <div 
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-40 lg:hidden"
      @click="closeMobileMenu"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <!-- Menu Panel -->
      <div 
        class="absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-b from-stone-50 to-white shadow-2xl"
        @click.stop
      >
        <div class="flex flex-col h-full">
          
          <!-- Header -->
          <div class="flex justify-between items-center px-6 py-5 border-b border-stone-200">
            <div class="h-10 w-auto">
             
            </div>
            <button
              @click="closeMobileMenu"
              class="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
            
            </button>
          </div>

          <!-- Navigation Links -->
          <div class="flex-1 overflow-y-auto px-6 py-8">
            <nav class="space-y-2">
              <a 
                v-for="(link, index) in navLinks" 
                :key="link.href" 
                :href="link.href"
                @click="handleMobileNavClick"
                :style="{ animationDelay: `${index * 50}ms` }"
                class="block mobile-nav-item group"
              >
                <div class="flex items-center justify-between px-4 py-4 rounded-lg hover:bg-stone-100 transition-all duration-300">
                  <span class="text-lg font-serif text-stone-900 group-hover:text-brand-gold transition-colors duration-300">
                    {{ link.name }}
                  </span>
                  <svg 
                    class="w-5 h-5 text-stone-400 transform group-hover:translate-x-1 group-hover:text-brand-gold transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            </nav>
          </div>

          <!-- Footer CTA -->
          <div class="px-6 py-6 border-t border-stone-200 bg-stone-50">
            <a 
              href="#contact" 
              @click="handleMobileNavClick"
              class="block w-full text-center px-6 py-4 bg-stone-900 text-white text-sm tracking-[0.3em] uppercase font-bold hover:bg-brand-gold transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
            
            <!-- Social Links (Optional) -->
            <div class="flex justify-center space-x-6 mt-6">
              <a href="#" class="text-stone-400 hover:text-brand-gold transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="text-stone-400 hover:text-brand-gold transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-stone-400 hover:text-brand-gold transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      isHidden: false,
      lastScroll: 0,
      isOnHero: true,
      scrolled: false,
      navLinks: [
        { name: 'Collection', href: '#featured' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Custom', href: '#bespoke' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Initial check
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScroll = window.pageYOffset;

      // Hide/show navbar on scroll
      if (currentScroll <= 0) {
        this.isHidden = false;
      } else {
        this.isHidden = currentScroll > this.lastScroll && currentScroll > 100;
      }
      this.lastScroll = currentScroll;

      // Check if on hero section
      const hero = document.getElementById('hero');
      if (hero) {
        this.isOnHero = currentScroll < hero.offsetHeight - 50;
      }

      // Add background when scrolled
      this.scrolled = currentScroll > 50;

      // Close mobile menu on scroll
      if (this.mobileMenuOpen && currentScroll > this.lastScroll) {
        this.closeMobileMenu();
      }
    },

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      
      // Prevent body scroll when menu is open
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },

    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },

    handleMobileNavClick(e) {
      this.closeMobileMenu();
      this.scrollToSection(e);
    },

    scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
/* ===== NAVBAR ANIMATIONS ===== */
.nav-visible {
  transform: translateY(0);
}

.nav-hidden {
  transform: translateY(-100%);
}

/* ===== MOBILE MENU TRANSITIONS ===== */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .absolute.right-0,
.mobile-menu-leave-active .absolute.right-0 {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .absolute.right-0,
.mobile-menu-leave-to .absolute.right-0 {
  transform: translateX(100%);
}

/* ===== MOBILE NAV ITEMS ANIMATION ===== */
.mobile-nav-item {
  opacity: 0;
  transform: translateX(20px);
  animation: slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===== CUSTOM COLORS ===== */
.text-brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }
.hover\:text-brand-gold:hover { color: #C9A961; }
.hover\:bg-brand-gold:hover { background-color: #C9A961; }
.border-brand-gold { border-color: #C9A961; }

/* ===== RESPONSIVE IMPROVEMENTS ===== */
@media (max-width: 1023px) {
  /* Ensure mobile menu is full height on all devices */
  .mobile-menu-panel {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
}

@media (max-width: 640px) {
  /* Make mobile menu full width on small screens */
  .absolute.right-0 {
    width: 100%;
  }
}

/* ===== SMOOTH SCROLLING ===== */
html {
  scroll-behavior: smooth;
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
  
  html {
    scroll-behavior: auto;
  }
}

/* ===== SAFARI FIXES ===== */
@supports (-webkit-touch-callout: none) {
  .mobile-menu-panel {
    min-height: -webkit-fill-available;
  }
}
</style>