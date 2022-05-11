<template>
  <nav>
    <div v-if="authIsReady">Logged in and Auth is ready || {{user.email}}</div>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="handleLogout">Log Out</button>
    <router-link to="/signUp">Register</router-link>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import router from "@/router";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    const handleLogout = () => {
      store.dispatch('logout')
      router.push('/')
    }
    return {
      handleLogout,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  },
}
</script>

<style scoped>

</style>