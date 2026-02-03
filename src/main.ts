import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'

createApp(App)
    .use(router)
    .use(VueGtag, {
        property: {
            id: 'G-M46S0N13LG' // <-- paste your Measurement ID here
        }
    })
    .mount('#app')
