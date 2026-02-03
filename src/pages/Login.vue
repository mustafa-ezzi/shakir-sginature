<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
    <div class="w-full max-w-md bg-[#0f1724]/70 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-xl">
      <div class="mb-6 text-center">
        <h1 class="text-2xl font-bold">QuotelyPro Analytics</h1>
        <p class="text-sm text-gray-300 mt-1">Private dashboard — sign in with Google</p>
      </div>

      <div class="flex flex-col gap-4">
        <button
          @click="onGoogleSignIn"
          class="flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.01] transition"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M21 12.2c0-.6-.05-1.2-.14-1.8H12v3.4h5.5c-.24 1.4-1.1 2.5-2.35 3.3v2.7h3.8c2.2-2 3.5-5 3.5-8.6z" fill="#4285F4"/>
            <path d="M12 22c2.7 0 5-0.9 6.7-2.5l-3.8-2.7c-1 .7-2.3 1.1-3 1.1-2.3 0-4.2-1.5-4.9-3.5H3.9v2.2C5.7 19.8 8.6 22 12 22z" fill="#34A853"/>
            <path d="M7.1 13.4A4.5 4.5 0 0 1 7 12c0-.4.1-.8.1-1.2V8.4H3.9A8.9 8.9 0 0 0 3 12c0 1.2.2 2.3.7 3.4l3.4-2z" fill="#FBBC05"/>
            <path d="M12 6.8c1.5 0 2.9.5 4 1.6l3-3A9.9 9.9 0 0 0 12 2 9.9 9.9 0 0 0 3.9 6.4l3.2 2.5C8 8.3 9.7 6.8 12 6.8z" fill="#EA4335"/>
          </svg>
          <span class="font-semibold">Sign in with Google</span>
        </button>

        <p v-if="error" class="text-red-400 text-sm text-center">{{ error }}</p>

        <div v-if="loading" class="text-sm text-gray-300 text-center">Connecting…</div>

        <p class="text-xs text-gray-400 mt-4">Only authorized emails can access the dashboard.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const error = ref('')

// CONFIG — replace if you wish (your Client ID already provided)
const CLIENT_ID = '803820540345-265on6s45e7u720g9ir8ja387q9ca7rg.apps.googleusercontent.com'
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/userinfo.email openid profile'
const allowedEmails = ["mustafaezzi143@gmail.com", "hello@quotelypro.com"]

// The token client (will be created on first click)
let tokenClient: any = null

function initTokenClient() {
  if ((window as any).google && !tokenClient) {
    tokenClient = (window as any).google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      ux_mode: 'popup',
      callback: async (resp: any) => {
        if (resp.error) {
          error.value = resp.error
          loading.value = false
          return
        }

        const accessToken = resp.access_token
        sessionStorage.setItem('google_access_token', accessToken)

        const info = await fetchUserInfo(accessToken)
        if (!info || !info.email) {
          error.value = 'Failed to fetch user info'
          loading.value = false
          return
        }

        if (!allowedEmails.includes(info.email)) {
          sessionStorage.removeItem('google_access_token')
          error.value = 'Access Denied. Unauthorized email.'
          loading.value = false
          return
        }

        localStorage.setItem('user_email', info.email)
        router.push('/analytics-dashboard')
        loading.value = false
      }
    })
  }
}


async function fetchUserInfo(accessToken: string) {
  const res = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  return res.ok ? res.json() : null
}

function onGoogleSignIn() {
  loading.value = true
  error.value = ''
  initTokenClient()
  tokenClient.requestAccessToken({ prompt: 'consent' })
}

</script>

<style scoped>
/* Dark gradient + glass feel */
body { background: transparent; }
</style>
