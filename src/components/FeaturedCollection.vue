<template>
  <section id="featured" class="relative py-20 md:py-32 bg-[#F9F8F6] overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="max-w-[1440px] mx-auto h-full border-x border-stone-200/50"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="mb-24 md:mb-32 flex flex-col md:flex-row items-baseline justify-between border-b border-stone-200 pb-8">
        <h2 class="text-4xl md:text-6xl font-serif italic text-stone-900 tracking-tight">
          The <span class="text-brand-gold">Styles</span>
        </h2>
        <p class="text-[10px] tracking-[0.5em] uppercase font-bold text-stone-400 mt-4 md:mt-0">
          Signature Series 2023
        </p>
      </div>

      <div v-for="(item, index) in products" :key="index" 
           ref="productItems"
           class="product-row relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center mb-32 last:mb-0">
        
        <div class="absolute top-0 opacity-[0.05] text-9xl font-serif italic text-stone-900 pointer-events-none transition-transform duration-1000 ease-out parallax-number"
             :class="index % 2 === 0 ? '-left-8' : '-right-8'">
          0{{ index + 1 }}
        </div>

        <div class="md:col-span-6 lg:col-span-5" :class="index % 2 !== 0 ? 'md:order-2' : ''">
          <div class="relative group cursor-pointer overflow-hidden aspect-[3/4] bg-stone-200">
            <div class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-700 z-10"></div>
            
            <img 
              :src="item.image" 
              class="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105 parallax-img"
              :alt="item.title"
            />

            <div class="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
              <div class="bg-white/90 backdrop-blur-md p-4 text-center">
                <span class="text-[9px] tracking-[0.3em] uppercase font-bold text-stone-900">View Product Details</span>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-6 lg:col-span-6 flex flex-col" 
             :class="index % 2 !== 0 ? 'md:order-1 lg:pr-12' : 'lg:pl-12'">
          
          <div class="flex items-center gap-3 mb-6">
            <span class="h-px w-8 bg-brand-gold"></span>
            <span class="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold">{{ item.tag }}</span>
          </div>

          <h3 class="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-6 leading-tight capitalize">
            {{ item.title }}
          </h3>

          <p class="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light">
            {{ item.desc }}
          </p>

         
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { 
          tag: 'Blood Red', 
          title: 'ivory contrast panels', 
          desc: 'A striking blood red abaya featuring elegant mocha brown and ivory contrast panels for a bold yet refined look.', 
          image: '/blood-red.jpeg' 
        },
        { 
          tag: 'Deep Teal Green', 
          title: 'soft mint panels', 
          desc: 'Rich deep teal green abaya accented with soft mint panels and delicate white lace for a timeless, elegant finish.', 
          image: '/deep-teal.jpeg' 
        },
        { 
          tag: 'Double Pink', 
          title: 'intricate black lace', 
          desc: 'Soft rose pink fabric adorned with intricate black lace, blending delicate charm with sophisticated style.', 
          image: '/double-pink.jpeg' 
        },
         { 
          tag: 'Mocha Brown', 
          title: 'intricate black lace', 
          desc: 'Soft mocha brown fabric adorned with intricate black lace, blending delicate charm with sophisticated style.', 
          image: '/mocha-brown.jpeg' 
        }
      ]
    }
  },
  mounted() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Trigger child animations
          const children = entry.target.querySelectorAll('.tag-reveal, .title-reveal, .desc-reveal, .link-reveal, .caption-reveal, .number-reveal, .line-draw, .decoration-reveal');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe product items
    if (this.$refs.productItems) {
      this.$refs.productItems.forEach(el => observer.observe(el));
    }

    // Observe header
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.3 });

    const header = document.querySelector('.header-reveal');
    if (header) headerObserver.observe(header);

    // Observe summary
    const summaryObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.3 });

    const summary = document.querySelector('.summary-reveal');
    if (summary) summaryObserver.observe(summary);

    // Parallax effect on scroll
    window.addEventListener('scroll', this.handleParallax);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleParallax);
  },
  methods: {
    handleParallax() {
      const items = document.querySelectorAll('.image-wrapper');
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yPos = (scrollPercent - 0.5) * 30;
        
        const img = item.querySelector('img');
        if (img && rect.top < window.innerHeight && rect.bottom > 0) {
          img.style.transform = `translateY(${yPos}px) scale(1.1)`;
        }
      });
    }
  }
}
</script>

<style scoped>
/* Refined Entry Animation */
.product-row {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
}

.product-row.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.text-brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }

/* Mobile refinement */
@media (max-width: 768px) {
  .parallax-number {
    font-size: 5rem;
    top: -2rem;
  }
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const handleScroll = () => {
  const rows = document.querySelectorAll('.product-row');
  const images = document.querySelectorAll('.parallax-img');
  const numbers = document.querySelectorAll('.parallax-number');

  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      row.classList.add('is-visible');
    }
  });

  images.forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const yPos = (scrollPercent - 0.5) * 40; // Reduced intensity for professional feel
    img.style.transform = `translateY(${yPos}px) scale(1.1)`;
  });

  numbers.forEach((num, i) => {
    const speed = (i + 1) % 2 === 0 ? 0.05 : 0.08;
    const yPos = window.scrollY * speed;
    num.style.transform = `translateY(${-yPos % 50}px)`;
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>