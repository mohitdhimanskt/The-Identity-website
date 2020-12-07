<template>
  <div>
    <div
      v-if="vechicle.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="getStrapiMedia(vechicle.image.url)"
      uk-img
    >
      <h1>{{ vechicle.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <!-- eslint-disable vue/no-v-html -->
        <div
          v-if="vechicle.content"
          id="editor"
          v-html="$md.render(vechicle.content)"
        />
        <!-- eslint-enable vue/no-v-html -->
        <p v-if="vechicle.published_at">
          {{ moment(vechicle.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";

export default {
  async asyncData({ $strapi, params }) {
    const matchingVechicle = await $strapi.find("vehicles", {
      slug: params.slug,
    });
    return {
      vechicle: matchingVechicle[0],
      // global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  // head() {
  //   const { defaultSeo, favicon, siteName } = this.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     metaTitle: this.vechicle.title,
  //     metaDescription: this.vechicle.description,
  //     shareImage: this.vechicle.image,
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
};
</script>
