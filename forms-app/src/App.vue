<template>
  <the-form></the-form>
</template>

<script>
import TheForm from "./components/TheForm.vue";

export default {
  name: "App",
  components: {
    TheForm,
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
