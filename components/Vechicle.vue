<template>
  <div>
    <div class="featured">
      <span>Our Top Featured Motorcycle</span>
    </div>
    <hr style="border: none;
    padding-top: 0px;
    height: 1px;
    width: 10%;
    color: lightgrey;
    background-color: #eb1e29;"
    />
    <div class="vechicle">
      <nuxt-link
        v-for="vechicle in vehicles"
        :key="vechicle.id"
        :to="{ name: 'vechicle-slug', params: { slug: vechicle.slug } }"
        class="link"
      >
        <div class="geography">
          <div class="media-top">
            <img :src="getStrapiMedia(vechicle.image.url)" height="100" />
          </div>
          <div class="content">
            <div class="uk-card">
              <p v-if="vechicle.page" id="page" class="uppercase">
                {{ vechicle.page.name }}
              </p>
              <div class="uk-text-title">{{ vechicle.title }}</div>
              <hr />
            </div>
            <div class="uk-card-price">
              <!-- <p  class="uk-text">{{ vechicle.price }}</p> -->
            </div>
            <div class="uk-card-model">
              <p class="uk-text-large">{{ vechicle.description }}</p>
            </div>
            <hr />
            <div class="uk-card-price">
              <p class="uk-text">{{ vechicle.price }}</p>
            </div>
            <hr />
            <div class="stars-box text-left">
              <div class="stars-outer">
                <div class="stars-inner">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="model">
                  {{ vechicle.model }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>

    <!-- <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li v-for="page in pagess" :key="page.id">
          <nuxt-link
            :to="{ name: 'page-slug', params: { slug: page.slug } }"
            tag="a"
          >
            {{ page.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>  -->
  </div>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    vehicles: {
      type: Array
    }
  },
  methods: {
    getStrapiMedia
  }
};
</script>
<style>
.vechicle {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 20px;
  font-family: "neuzeit-grotesk", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1em;
  line-height: 1.5;
  color: #303336;
}
.featured {
  font-size: 40px;
  font-style: italic;
}
.geography {
  height: 485px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 40px 40px -20px #8b8d8d44;
  overflow: hidden;
}
.uk-text-title {
  font-weight: 700;
  margin-bottom: -16px;
  font-style: italic;
  color: black;
}
.uk-text-large {
  color: black;
  font-size: 15px;
  font-style: italic;
}
.uk-card-price {
  color: black;
  font-style: italic;
}
.stars-inner {
  margin-top: -2px;
  color: orange;
  margin-left: 20px;
}
.model {
  margin-left: 200px;
  margin-top: -24px;
  font-style: italic;
}
</style>
