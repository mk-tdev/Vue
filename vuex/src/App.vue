<template>
  <base-container title="Vuex" :mode="'g'">
    <h3>{{ counter }}</h3>

    <the-counter></the-counter>

    <base-button @click="addOne">Add</base-button>

    <change-counter></change-counter>
  </base-container>
</template>

<script>
import ChangeCounter from "./components/ChangeCounter.vue";
import TheCounter from "./components/TheCounter.vue";
export default {
  components: { TheCounter, ChangeCounter },
  name: "App",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
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
