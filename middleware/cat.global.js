import { useCatStore } from '@/stores/cat'

export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp()
  const store = useCatStore(nuxtApp.$pinia)
  store.setCat('tabby')
})
