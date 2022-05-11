<template>
  <div class="home">
    <nav-bar />
    Home
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/nav-bar";
export default {
  name: 'HomeView',
  components: {NavBar},
}
</script>
