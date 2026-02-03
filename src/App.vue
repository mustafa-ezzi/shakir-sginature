<template>
  <div class="bg-brand-cream min-h-screen selection:bg-brand-gold selection:text-white">
    <TheNavbar />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from './components/Navbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style>
:root {
  --brand-gold: #C9A961;
  --brand-cream: #FAF7F2;
  --brand-dark: #1A1A1A;
  --brand-tan: #D2B48C;
}

/* Optional: Smooth transition between pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>