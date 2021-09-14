<template>
  <base-button @click="addOne">
    Add
  </base-button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 3 });
      // this.$store.commit({ type: "increase", value: 3 });
      this.$store.dispatch("increment");
    },
  },
};
</script>
