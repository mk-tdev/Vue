<template>
  <section>
    <h2>{{ movieName }}</h2>
    <p>{{ story }}</p>
  </section>
</template>

<script>
export default {
  props: ["movieName", "story"],
  data() {
    return {};
  },
};
</script>

<style></style>
