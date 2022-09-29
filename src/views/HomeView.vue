<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto mb-2 justify-content-center md-md-8">
            <li>
              <router-link to="/home" class="nav-link px-2 text-white">Home</router-link>
            </li>
          </ul>
          <div class="text-end">
            <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
          </div>

        </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
