export default defineNuxtConfig({
  devServer: {
    ...(process.env.NODE_ENV === 'development' && {
      https: {
        key: 'localhost_key.pem',
        cert: 'localhost_cert.pem'
      }
    })
  },
  modules: [
    '@pinia/nuxt'
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
})
