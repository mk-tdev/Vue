<template>
  <base-container :mode="'g'">
    <user-auth></user-auth>
  </base-container>
  <base-container title="Vuex" :mode="'g'" v-if="isAuth">
    <p>{{ $store.state.counter }}</p>

    <the-counter></the-counter>
    <fav-value></fav-value>

    <base-button @click="addOne">Add 10</base-button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import ChangeCounter from "./components/ChangeCounter.vue";
import FavValue from "./components/FavValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: { TheCounter, ChangeCounter, FavValue, UserAuth },
  name: "App",
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.commit({ type: "increment" });

      this.$store.dispatch({ type: "points/increase", value: 10 });
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #333;
  color: #fff;
  text-align: center;
}
</style>
