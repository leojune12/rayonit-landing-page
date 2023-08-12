// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    'assets/css/bootstrap.scss',
    '~/assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client'}
  ]
})
