<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <TheHero />
          <FeaturedCollection />
          <GallerySection />
          <BespokeSection />
          <ContactSection />
   
  </div>
</template>

<script setup>
import TheHero from '../components/Hero.vue'
import FeaturedCollection from '../components/FeaturedCollection.vue'
import GallerySection from '../components/GallerySection.vue'
import BespokeSection from '../components/BespokeSection.vue'
import ContactSection from '../components/ContactSection.vue'



import { onMounted } from 'vue'

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id')
          history.replaceState(null, '', `#${sectionId}`)

          // Send Google Analytics event
          window.gtag?.('event', 'section_view', {
            section: sectionId,
            page: window.location.pathname
          })
        }
      })
    },
    { threshold: 0.3 }
  )

  sections.forEach(section => observer.observe(section))
})

</script>
