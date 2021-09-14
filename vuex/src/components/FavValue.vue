<template>
  <base-container>
    <h3>{{ counter }}</h3>

    <p>We do more here...</p>
  </base-container>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>

<style scoped></style>
