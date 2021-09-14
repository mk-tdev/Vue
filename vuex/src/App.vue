<template>
  <base-container title="Vuex" :mode="'g'">
    <the-counter></the-counter>
    <fav-value></fav-value>

    <base-button @click="addOne">Add</base-button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import ChangeCounter from "./components/ChangeCounter.vue";
import FavValue from "./components/FavValue.vue";
import TheCounter from "./components/TheCounter.vue";
export default {
  components: { TheCounter, ChangeCounter, FavValue },
  name: "App",
  computed: {},
  methods: {
    addOne() {
      this.$store.state.counter++;
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
