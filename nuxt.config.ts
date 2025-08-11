// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
        tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      ripple: true,
      //inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          //prefix: 'p',
          darkModeSelector: 'system',
          //cssLayer: false
        }
      }
    }
  }
})