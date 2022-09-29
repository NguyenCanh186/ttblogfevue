<template>
<div>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand"><i class="fa fa-home 2x"></i>  Blog Manager</router-link>
    </div>
    <div class="text-end" v-if="!loggedIn">
      <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
    </div>
    <div class="text-end" v-if="!loggedIn">
      <router-link to="/register" class="btn btn-outline-light me-2">Register</router-link>
    </div>
    <div class="text-end" v-if="loggedIn">
    <button class="btn btn-outline-light me-2" @click="logOut">Logout</button>
    </div>
  </nav>
</div>
</template>

<script>
import login from '../views/Login'
// import authService from "@/services/auth-service";
export default {
  name: "NavBar",
  components: login,
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
