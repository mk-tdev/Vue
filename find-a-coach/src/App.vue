<template>
  <the-header></the-header>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap");

* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Glory", sans-serif;
}
div.main {
  margin: 5rem 1rem;
}
</style>
