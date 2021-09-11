<template>
  <section>
    <h2>Select a Movie</h2>
    <movies-grid
      :movies="movies"
      @select-movie="$emit('select-movie', $event)"
    ></movies-grid>
  </section>
</template>

<script>
export default {
  props: ["movies"],
  emits: ["select-movie"],
  data() {
    return {};
  },
};
</script>

<style></style>
