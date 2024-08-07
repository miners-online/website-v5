// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ["@nuxthq/studio"],
  routeRules: {
    '/.well-known/acme-challenge/': {
      proxy: {
        to: 'http://minersonline.ddns.net/.well-known/acme-challenge/',
      }
    },
    '/.well-known/acme-challenge/**': {
      proxy: {
        to: 'http://minersonline.ddns.net/.well-known/acme-challenge/**',
      }
    }
  }
});