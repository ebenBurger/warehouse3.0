import { createStore } from 'vuex'

import {
  auth,
} from '@/firebase/config'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("user state change", state.user)
    },

    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signup (context, {email, password}) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        //set mutation
        context.commit('setUser', response.user)
      } else {
        throw new Error("Could not complete login")
      }
    },

    async login (context, {email, password}) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        //set mutation
        context.commit('setUser', response.user)
      } else {
        throw new Error("Could not complete signup")
      }
    },

    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
    }
  },


})

const unsubscribe =onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsubscribe()
})

export default store