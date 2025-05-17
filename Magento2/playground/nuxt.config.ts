import vsfModule from './vsfModule'

export default defineNuxtConfig({
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
