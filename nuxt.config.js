export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cria Link',
    meta: [
      // Essetial Meta Tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=yes' },

      // Primary Meta Tags
      { hid: 'description', name: 'description', content: 'Crie links personalizados para compartilhar seu WhatsApp, ou inicie uma conversa sem salvar o contato.' },
      { hid: 'keywords', name: 'keywords', content: 'whatsapp, link, contato, marketing, android, iphone' },
      
      // Secondary Meta Tags
      { hid: 'application-name', name: 'application-name', content: 'Cria Link' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Cria Link' },
      { hid: 'author', name: 'author', content: 'Karytonn DEV' },
      { hid: 'copyright', name: 'copyright', content: 'Karytonn DEV' },
      { hid: 'creator', name: 'creator', content: 'Karytonn DEV' },
      { hid: 'theme-color', name: 'theme-color', content: '#124E4A' },

      // Google Search Console
      { hid: 'google-site-verification', name: 'google-site-verification', content: process.env.GOOGLE_SEARCH_CONSOLE },

      // Open Graph / Facebook and WhatsApp
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Cria Link' },
      { hid: 'og:description', property: 'og:description', content: 'Crie links personalizados para compartilhar seu WhatsApp, ou inicie uma conversa sem salvar o contato.' },
      { hid: 'og:url', property: 'og:url', content: 'https://crialink.karytonn.dev' },
      { hid: 'og:image', property: 'og:image', content: '/logo.png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '600' },
      { hid: 'og:image:height', property: 'og:image:height', content: '315' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Cria Link' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://crialink.karytonn.dev/logo.png' },
      { hid: 'fb:page_id', property: 'fb:page_id', content: '171093947012069' },

      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Cria Link' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Crie links personalizados para compartilhar seu WhatsApp, ou inicie uma conversa sem salvar o contato.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/logo.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Cria Link' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@karytonn' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@karytonn' },
      { hid: 'twitter:domain', name: 'twitter:domain', content: 'https://karytonn.dev' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/mask"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    // https://www.elian.codes/blog/adding-google-fonts-to-your-nuxtjs-site/
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
    },
  },

  googleFonts: {
    prefetch: true,
    preconnect: true,
    inject: true,
    display: 'swap',
    families: {
      'Caveat': {
        wght: [400, 500]
      },
      'Poppins': {
        wght: [100, 200, 400, 500]
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
