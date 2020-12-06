<template>
  <div class="container">
  <Vechicle :vehicles="vehicles"></Vechicle>
  </div>
</template>

<script>
import Vechicle from '../components/Vechicle.vue'
import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";
export default {
  components: { Vechicle },
 async asyncData({ $strapi }) {
   try {
   let vehicles = await $strapi.find("vehicles");
    console.log(vehicles)
    return {
      vehicles
    };
    }catch (e){
      console.log(e)
    }

  },
  //  head() {
  //   const { seo } = this.vechicle ;
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     ...seo,
  //   };

  //   return {
  //     titleTemplate: `%s | ${siteName}`,
  //     title: fullSeo.metaTitle,
  //     meta: getMetaTags(fullSeo),
  //     link: [
  //       {
  //         rel: "favicon",
  //         href: getStrapiMedia(favicon.url),
  //       },
  //     ],
  //   };
  // },
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
