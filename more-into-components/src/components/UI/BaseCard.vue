<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>The Default (When no content is passed)</h2> -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$slots.header);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 30rem;
  border-radius: 6px;
  box-shadow: 0 0 3px 2px grey;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
