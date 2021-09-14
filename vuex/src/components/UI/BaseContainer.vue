<template>
  <section :class="mode">
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ["title", "mode"],
  computed: {
    card() {
      return "g";
    },
  },
  mounted() {},
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: #333;
}

.g {
  border-radius: 5px;
  border-top: 5px solid white;
}

h2 {
  text-align: center;
}
</style>
