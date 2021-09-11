<template>
  <section>
    <h2>Select a Movie</h2>
    <movies-grid :movies="movies"></movies-grid>
  </section>
</template>

<script>
export default {
  props: ["movies"],
  // emits: ["select-movie"],
  data() {
    return {};
  },
};
</script>

<style></style>
