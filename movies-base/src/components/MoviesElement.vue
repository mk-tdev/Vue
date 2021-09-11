<template>
  <li>
    <h3>{{ movieName }}</h3>
    <p>{{ director }}</p>
    <button @click="$emit(selectMovie)">Read More</button>
    <!-- <button @click="$emit('select-movie', id)">Read More</button> -->
  </li>
</template>

<script>
export default {
  inject: ["selectMovie"],
  props: ["id", "movieName", "director"],
  emits: ["select-movie"],
  data() {
    return {};
  },
};
</script>

<style></style>
