<template>
  <ul>
    <movies-element
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :movie-name="movie.name"
      :director="movie.director"
      @select-movie="$emit('select-movie', $event)"
    ></movies-element>
  </ul>
</template>

<script>
export default {
  // props: ["movies"],
  inject: ["movies"],
  emits: ["select-movie"],
};
</script>

<style></style>
