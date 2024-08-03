export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  colorMode: {
    preference: 'light',
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-shiki'],
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  devServer: {
    port: 1919,
  },
  routeRules: {
    '/swr-demo': { swr: true },
  },
})
