<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ vechicle.title }}</h1>
      </div>
    </div>
    <p>{{ vechicle.description}}</p>
    <div class="phone">
      {{ vechicle.price }}
    </div>
  </div>
</template>

<script>
import { getMetaTags } from "../../utils/seo";
import { getStrapiMedia } from "../../utils/medias";

export default {
 async asyncData({ $strapi, params }) {
    const matchingVechicle = await $strapi.find("vehicles", {
      slug: params.slug
    });
    return {
      vechicle: matchingVechicle[0]
      // global: await $strapi.find("global"),
    };
  },
  // head() {
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     metaTitle: `${this.page.title} page`,
  //     metaDescription: `All articles about ${this.page.title}`,
  //   };

  //   return {
  //     title: fullSeo.metaTitle,
  //     titleTemplate: `%s | ${siteName}`,
  //     meta: getMetaTags(fullSeo),
  //     link: [
  //       {
  //         rel: "favicon",
  //         href: getStrapiMedia(favicon.url),
  //       },
  //     ],
  //   };
  // },
};
</script>
