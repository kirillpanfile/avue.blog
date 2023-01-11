export default defineNuxtConfig({
  app: {
    head: {
      title: 'My App'
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@kevinmarrec/nuxt-pwa'
  ]
});
