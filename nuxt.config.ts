export default defineNuxtConfig({
  app: {
    head: {
      title: 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A vue blog' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './public/icon.png' }]
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
