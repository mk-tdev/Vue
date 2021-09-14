<template>
  <base-button @click="addOne">
    Add 3
  </base-button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 3 });
      this.$store.commit({ type: "increase", value: 3 });
    },
  },
};
</script>
