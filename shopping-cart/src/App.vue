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
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
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
