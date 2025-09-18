// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Bridal Seamstress',
      meta: [
        { name: 'description', content: 'Custom bridal alterations by an expert seamstress.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  compatibilityDate: '2024-07-16',
  build: {
    transpile: ['vue-datepicker-next'],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'static'
  },
  devServer: {
    host: '0.0.0.0'
  },
  vite: {
    server: {
      allowedHosts: ['*.netlify.app']
    }
  },
  fonts: {
    families: [
      { name: 'Cousine', provider: 'google' },
      { name: 'Red Hat Display', provider: 'google' },
    ]
  }
})
