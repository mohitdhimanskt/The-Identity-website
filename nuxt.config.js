const strapiBaseUri = process.env.API_URL || "http://localhost:1337";
export default {
  target: "static",
  env: {
    strapiBaseUri,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {

    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon," , type: "image/x-icon", href: "/favicon.ico" },
     
  ],
  
  },
  

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["uikit/dist/css/uikit.min.css", "uikit/dist/css/uikit.css",  "@assets/css/main.css",],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi", "bootstrap-vue/nuxt", '@nuxtjs/font-awesome' ,
 
],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "vechicles",
        type: "collection",
      },
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "homepage",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
