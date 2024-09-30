// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [[
    '@nuxtjs/google-adsense',
    {
      id: 'ca-pub-2170630358154868',
      onPageLoad: true,
    },
  ], 'nuxt-icon', '@nuxtjs/google-fonts', '@nuxt/content', '@nuxt/image'],

  googleFonts: {
    families: {
      "Schibsted Grotesk": [400, 500, 600, 700],
    },
    prefetch: true,
    preconnect: true,
  },

  app: {
    head: {
      title: 'Tomo Digital Creative',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'keywords',
          content: 'Digital Agency, Tomo, tomodigi, jasa pembuatan web, jasa pembuatan animasi, jasa pembuatan video'
        },
        {
          name: 'robots',
          content: "index, follow"
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.webp',
        },
        {
          rel: 'dns-prefetch',
          href: 'https://unpkg.com/',
          fetchpriority: 'high',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
          fetchpriority: 'high',
          crossorigin: 'anonymous',
        }
      ],
    },
  },

  routeRules: {
    '/': { prerender: true }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-08-31',
});