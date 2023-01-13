export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'A VUE BLOG - HOME PAGE | INDEX',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A vue blog' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://i.ibb.co/tsS37Dp/icon.png',
        },
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@kevinmarrec/nuxt-pwa',
  ],

  pwa: {
    meta: {
      favicon: true,
    },
  },
})
