<template>
  <the-header :title="'Resources Bucket'"></the-header>

  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/resources/TheResources.vue";

export default {
  components: {
    TheHeader,
    TheResources,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  background-color: #333;
  color: white;
}
</style>
