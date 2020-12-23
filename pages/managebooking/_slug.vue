<template>
<div>
  <h1>Booking Cart</h1>
  <div class="cart">
    <div class="form-group">
      <input
        v-model="name"
        type="text"
        class="form-control shadow-none"
        placeholder="user name"
        id="name"
        required
      />
    </div>
    <div class="form-group">
      <input
        v-model="email"
        type="text"
        class="form-control shadow-none"
        placeholder="user email"
        id="name"
        required
      />
    </div>
    <div class="form-group">
      <input
        v-model="phone"
        type="text"
        class="form-control shadow-none"
        placeholder="phone no"
        id="name"
        required
      />
    </div>
    <div class="uk-card-price">
      <p class="uk-text">Price:   {{ vechicle.prices }}</p>
    </div>
    <div class="button">
      <button>Delete </button>
    </div>
    <div class="edit">
       <nuxt-link
          :to="{ name: 'booking-slug', params: { slug: vechicle.slug } }"
          tag="a"
        >
      <button>Edit</button>
      </nuxt-link>
    </div>
  </div>
</div>
</template>
<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";

export default {
  props: {
    buttons: {
      type: Array
    }
  },

  async asyncData({ $strapi, params }) {
    const matchingVechicle = await $strapi.find("vehicles", {
      slug: params.slug
    });
    return {
      vechicle: matchingVechicle[0]
      // global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
      image: "",
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      file: ""
    };
  },
  methods: {
    moment,
    getStrapiMedia,
    async sendMessage() {
      let rawData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        vehicle: this.vechicle.id
      };
      rawData = JSON.stringify(rawData);
      let formData = new FormData();
      formData.append("files.image", this.file);
      formData.append("data", rawData);
      console.log(formData);
    }
  }
  
};
</script>
