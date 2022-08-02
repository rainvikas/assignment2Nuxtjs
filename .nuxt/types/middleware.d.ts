import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/vikas.yadav2/Desktop/Product_list/assignment2Nuxtjs/nuxtexam/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}