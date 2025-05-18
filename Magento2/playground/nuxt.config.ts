import vsfModule from './app/modules/vsfModule'

export default defineNuxtConfig({
  compatibilityDate:'2025-05-17',
  modules: [
    '@nuxtjs/tailwindcss',
    '@vue-storefront/nuxt',
    vsfModule,  // <-- pass the imported module, NOT a string path
  ],
  vsf: {
    middleware: {
      apiUrl: 'http://localhost:4000',
    },
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
})
