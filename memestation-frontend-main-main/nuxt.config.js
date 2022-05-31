export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Meme Station',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://storage.googleapis.com/meme-station-reddit/redditAds-pixel.js",
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.css',
    '~/assets/css/inputs.css',
    'vue-multiselect/dist/vue-multiselect.min.css',
    '~/assets/css/vue-multiselect-fix.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://localhost:8080'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },
  
  router: {
  },

  auth: {
    redirect: {
      logout: '/',
      login: '/',
      home: '/profile'
    },
    strategies: {
      auth0: {
        domain: 'dev-faz13lko.us.auth0.com',
        client_id: 'b2TTAl21k3kp76IeUytRtN1OIlCrVUnU',
        audience: 'https://dev-faz13lko.us.auth0.com/api/v2/'
      }
    }
  }
}
