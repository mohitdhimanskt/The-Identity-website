export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon, stylesheet" , type: "image/x-icon", href: "/favicon.ico,https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " },
  
  ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["uikit/dist/css/uikit.min.css", "uikit/dist/css/uikit.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [  '@nuxtjs/fontawesome'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
