<template>
  <base-container>
    <h3>{{ counter }}</h3>
  </base-container>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style scoped></style>
