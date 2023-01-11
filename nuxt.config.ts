export default defineNuxtConfig({
  app: {
    head: {
      title: 'A VUE BLOG - HOME PAGE | INDEX',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A vue blog' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '~/static/favicon.ico' }]
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@kevinmarrec/nuxt-pwa'
  ],

  pwa: {
    meta: {
      favicon: true
    }
  }
});
