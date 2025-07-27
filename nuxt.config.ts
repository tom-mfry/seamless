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
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'static'
  },
  fonts: {
    families: [
      { name: 'Alta', provider: 'google' },
      { name: 'Hello Paris', provider: 'google' },
    ]
  }
})
