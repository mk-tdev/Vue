<template>
  <header>
    <h3>{{ title }}</h3>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
header {
  padding: 0.1rem 0.5rem;
  background-color: #35495e;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
