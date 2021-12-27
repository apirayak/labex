<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
        <a><img src="./assets/labex_logo.png" alt="LabEx logo" class="img-fluid"></a>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <template v-if="$store.state.isAuthticated">
            <router-link to="/dashboard" class="navbar-item"
              >Dashboard</router-link
            >
          </template>

          <template v-else>
            <router-link to="/" class="navbar-item">Home</router-link>

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/sign-up" class="button is-success">Sign up</router-link>
                <router-link to="/log-in" class="button is-light">Login in</router-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (C) 2021</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    beforeCreate() {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if(token) {
        axios.defaults.headers.common['Authorization'] = "Token :" + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }
}
</script>
<style lang="scss">
@import "../node_modules/bulma";
</style>
