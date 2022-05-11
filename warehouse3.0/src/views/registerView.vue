<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h3>Register</h3>
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
        <div v-if="error">{{error}}</div>
      </div>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const error = ref('')

    //this is the access the store
    // const store = useStore()

    //computed props - this will get the state of the points initial state also import "COMPUTED"
    //const points = computed(() => store.state.points)

    //mutate and update state
    // const updatePoint = (p) => {
    //updatePoints is the method to do the mutation.
    // store.commit('updatePoints', p)
    // }



    const handleSubmit = async () => {
      try {
        await store.dispatch('', {
          email: email.value,
          password: password.value
        })
        await router.push('/home')
      } catch (err) {
        error.value = err.message
      }
    }
    return {
      handleSubmit,
      email,
      password,
      error
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  //display: flex;
  //justify-content: center;
  //align-items: center;
  position: relative;
  width: 100vw;
  height: 80vh;

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>