<template>
  <div class="register">
    <form @submit.prevent="handleSubmit">
      <h3>Log In</h3>
      <div>
        <div class="name">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" required>
        </div>

        <div class="password">
          <label for="email">Password:</label>
          <input type="password" name="password" v-model="password" required>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {ref} from "vue/dist/vue";

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    //this is the access the store
    // const store = useStore()

    //computed props - this will get the state of the points initial state also import "COMPUTED"
    //const points = computed(() => store.state.points)

    //mutate and update state
    // const updatePoint = (p) => {
    //updatePoints is the method to do the mutation.
    // store.commit('updatePoints', p)
    // }



    const handleSubmit = () => {
      console.log(email.value, password.value)
    }
    return {
      handleSubmit,
      email,
      password
    }
  }
}
</script>

<style scoped lang="scss">
.register {}
</style>