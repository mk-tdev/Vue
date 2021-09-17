<template>
  <div class="container" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.container {
  box-shadow: rgb(51, 50, 50) 0px 1px 4px;
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 2px;
}

div.lite {
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 2px;
  border-top: 7px solid #333;
  background-color: transparent;
}

div.left {
  padding: 1rem;
  margin: 1rem 2rem;
  border-radius: 5px;
  border-left: 7px solid #368b85;
  background-color: transparent;
}
</style>
