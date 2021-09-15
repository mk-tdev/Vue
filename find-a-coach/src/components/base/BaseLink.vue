<template>
  <router-link :to="to" :class="mode">{{ label }}</router-link>
</template>

<script>
export default {
  props: ["to", "label", "mode"],
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
  cursor: pointer;
}

a.dark {
  color: #fff;
  background-color: #316b83;
}

a.dark:hover {
  color: #333;
  border: 1px solid #316b83;
  background-color: #fff;
}

a.dark.active {
  color: #000000;
  background-color: #ffffff;
}

a:hover {
  color: #000000;
  background-color: #ffffff;
}

a.active {
  color: #000000;
  background-color: #ffffff;
}
</style>
