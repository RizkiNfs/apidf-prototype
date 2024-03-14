// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  css: [
    '@/assets/css/index.css',
  ],
})
