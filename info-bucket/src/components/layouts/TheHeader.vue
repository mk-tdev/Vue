<template>
  <header>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: white 0px 1px 4px;
}
</style>
