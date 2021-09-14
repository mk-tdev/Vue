<template>
  <base-container>
    <!-- <h3>{{ counter }}</h3> -->
    <h3>The Counter: {{ fc }}</h3>
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // ...mapGetters(["finalCounter"]),
    ...mapGetters("points", {
      fc: "finalCounter",
    }),
  },
};
</script>

<style scoped></style>
