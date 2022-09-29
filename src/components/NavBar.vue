<template>
<div>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand"><i class="fa fa-home 2x"></i>  Blog Manager</router-link>
    </div>
    <div class="text-end" v-if="!loggedIn">
      <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
    </div>
    <button class="btn btn-outline-light me-2">
      <router-link to="/logout">Logout</router-link>
    </button>
  </nav>
</div>
</template>

<script>
import login from '../views/Login'
import authService from "@/services/auth-service";
export default {
  name: "NavBar",
  components: login,
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    logout() {
      let response = authService.logout();
      if (response) {
        this.$store.state.auth.status.loggedIn = false
      }
    }
  }
}
</script>

<style scoped>

</style>
