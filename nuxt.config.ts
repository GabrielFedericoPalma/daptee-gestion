// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icons', "vuetify-nuxt-module", "@pinia/nuxt"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false
})