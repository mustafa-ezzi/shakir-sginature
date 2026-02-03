<template>
  <section id="contact" class="relative py-24 md:py-40 bg-[#faf9f6] overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none opacity-[0.05]" 
         style="background-image: radial-gradient(#C9A961 0.8px, transparent 0.8px); background-size: 40px 40px;">
    </div>
    <div class="absolute bottom-10 left-10 pointer-events-none select-none opacity-[0.02] hidden md:block">
      <span class="text-[12vw] font-serif italic leading-none text-stone-900">Contact</span>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div class="lg:col-span-5 space-y-12">
          <div>
            <span class="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-black block mb-6">Get in Touch</span>
            <h2 class="text-5xl md:text-7xl font-serif italic text-stone-900 leading-[1.1]">
              Begin your <br/><span class="text-brand-gold">journey.</span>
            </h2>
            <p class="mt-8 text-stone-500 text-sm md:text-base font-light leading-relaxed max-w-sm">
Whether you’re looking for a custom Rida or something from our collection, we’re here to help you find the perfect fit.            </p>
          </div>

          <div class="space-y-10">
            <div class="group cursor-pointer">
              <h3 class="text-stone-400 text-[9px] uppercase tracking-[0.4em] mb-2 font-bold">Email us</h3>
              <a href="mailto:info@Shakirsignaturestyle.com" class="text-xl font-serif italic text-stone-800 border-b border-transparent group-hover:border-brand-gold transition-all duration-500">
                info@Shakirsignaturestyle.com
              </a>
            </div>

            <div class="group cursor-pointer">
              <h3 class="text-stone-400 text-[9px] uppercase tracking-[0.4em] mb-2 font-bold">Direct Message</h3>
              <a href="https://wa.me/923001234567" class="text-xl font-serif italic text-stone-800 border-b border-transparent group-hover:border-brand-gold transition-all duration-500">
                +92 321 2600644
              </a>
            </div>

            <div class="pt-6">
              <h3 class="text-stone-400 text-[9px] uppercase tracking-[0.4em] mb-6 font-bold">Availability</h3>
              <p class="text-stone-600 text-xs tracking-widest leading-loose uppercase">
                Monday — Saturday<br/>
                10:00 AM — 08:00 PM PKT
              </p>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-7 bg-white p-8 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] border border-stone-100">
          <form @submit.prevent="handleSubmit" class="space-y-10">
            <div class="relative">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                class="atelier-input w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-stone-800 font-light"
              >
              <label for="name" class="atelier-label uppercase tracking-[0.3em] text-[10px] text-stone-400 absolute left-0 top-4 pointer-events-none transition-all duration-500">Full Name</label>
            </div>

            <div class="relative">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                class="atelier-input w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-stone-800 font-light"
              >
              <label for="email" class="atelier-label uppercase tracking-[0.3em] text-[10px] text-stone-400 absolute left-0 top-4 pointer-events-none transition-all duration-500">Email Address</label>
            </div>

            <div class="relative">
              <textarea 
                id="message"
                placeholder=" "
                rows="4" 
                class="atelier-input w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-brand-gold transition-colors text-stone-800 font-light resize-none"
              ></textarea>
              <label for="message" class="atelier-label uppercase tracking-[0.3em] text-[10px] text-stone-400 absolute left-0 top-4 pointer-events-none transition-all duration-500">Tell us about your vision</label>
            </div>
            
            <button 
              type="submit"
              class="group w-full relative overflow-hidden bg-stone-900 text-white px-8 py-6 text-[10px] tracking-[0.5em] uppercase font-black transition-all duration-700"
            >
              <span class="relative z-10 flex items-center justify-center space-x-3">
                <span>Request Consultation</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubmit = () => {
  console.log("Inquiry sent to atelier");
};
</script>

<style scoped>
.text-brand-gold { color: #C9A961; }
.bg-brand-gold { background-color: #C9A961; }
.border-brand-gold { border-color: #C9A961; }

/* Floating Label Logic */
.atelier-input:focus ~ .atelier-label,
.atelier-input:not(:placeholder-shown) ~ .atelier-label {
  top: -10px;
  font-size: 8px;
  color: #C9A961;
  font-weight: 900;
}

.atelier-input {
  font-size: 14px;
}

/* Smooth button text color shift */
.group:hover span {
  color: #1c1917; /* stone-900 */
}
</style>