import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/vikas.yadav2/Desktop/assignment2/nuxtexam/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}