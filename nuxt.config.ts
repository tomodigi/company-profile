// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-2170630358154868',
        onPageLoad: true,
      },
    ],
    ['nuxt-icon'],
  ],
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
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@600;700;800&family=Plus+Jakarta+Sans&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
