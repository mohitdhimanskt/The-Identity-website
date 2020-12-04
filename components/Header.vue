<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><router-link tag="a" class="navbar-brand" to="/" exact>The Identity</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>About us </router-link></li>
                 <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Category</router-link></li>
                  <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Our product</router-link></li>
                   <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Contact us</router-link></li>
                   <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>LeaderShip</router-link></li>
            </ul>
          
        </div>

    </nav>
  </client-only>
</template>