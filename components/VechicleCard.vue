<template>
  <div>
    <nuxt-link
      :key="vechicle.id"
      :to="{ name: 'vechicle-slug', params: { slug: vechicle.slug } }"
      class="uk-link-reset"
    >
      <div class="uk-card uk-card-muted">
        <div class="uk-card-media-top">
          <img :src="getStrapiMedia(vechicle.image.url)" height="100" />
        </div>
        <div class="uk-card-body">
          <p v-if="vechicle.category" id="category" class="uk-text-uppercase">
            {{ vechicle.category.name }}
          </p>
          <p id="title" class="uk-text-large">{{ vechicle.title }}</p>
          <hr class="uk-divider-small" />
        </div>
        <div class="uk-card-body">
          <p id="title" class="uk-text-large">{{ vechicle.price }}</p>
        </div>
        <div class="uk-card-body">
          <p id="title" class="uk-text-large">{{ vechicle.model }}</p>
        </div>
        <div class="uk-card-body">
            <p id="title" class="uk-text-large">{{vechicle.milege}}
            </p>        
        </div>
      </div>
    </nuxt-link>

    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li v-for="vechicle in vechicles" :key="vechicle.id">
          <nuxt-link
            :to="{ name: 'vechicle-slug', params: { slug: vechicle.slug } }"
            tag="a"
          >
            {{ vechicle.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStrapiMedia
  }
};
</script>
