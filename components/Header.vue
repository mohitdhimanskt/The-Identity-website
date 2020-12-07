<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact
              >Bike Renting</router-link
            >
          </li>
          <!-- <li><router-link  tag="a" class="navbar-brand" to="page" exact>About us </router-link></li>
                 <li><router-link tag="a" class="navbar-brand" to="/page" exact>Bike a rent</router-link></li>
                  <li><router-link tag="a" class="navbar-brand" to="/page" exact>Our product</router-link></li>
                   <li><router-link tag="a" class="navbar-brand" to="/page" exact>login</router-link></li>
                   <li><router-link tag="a" class="navbar-brand" to="/page" exact>Coupons</router-link></li> -->
        </ul>
    </div>
    
     <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="page in pages" :key="page.id">
            <nuxt-link
              :to="{ name: 'page-slug', params: { slug: page.slug } }"
              tag="a"
            >
              {{ page.title }}
            </nuxt-link>
          </li>
        </ul>
      </div> 
    </nav>
  </client-only>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array,
    }
  },
  
};

</script>
<style scoped>
.navbar-brand{
  font-style: italic;
  font-size: 15px;

}
</style>