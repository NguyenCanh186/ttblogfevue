<template>
  <div>
    <NavBar/>
    <!--  <h2>App component</h2>-->
    <router-view/>
  </div>

</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar}

}
</script>
<style>

</style>
