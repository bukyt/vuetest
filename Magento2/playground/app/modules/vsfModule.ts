// Magento2/playground/app/vsfModule.ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'vsf-magento-integration',
    configKey: 'vsfMagento',
  },
  setup(options, nuxt) {
    // You can add plugin/module logic here
    console.log('Magento integration module loaded')
  }
})
