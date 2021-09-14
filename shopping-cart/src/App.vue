<template>
  <the-header></the-header>

  <base-container>
    <router-view></router-view>
  </base-container>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #333;
  color: #fff;
}
* {
  box-sizing: border-box;
}
</style>
