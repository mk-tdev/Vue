<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.6rem;
  border: 0.1em solid #ffffff;
  border-radius: 0.12em;
  box-sizing: border-box;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
  cursor: pointer;
  margin: 0.4rem 0;
}

button:hover {
  color: #000000;
  background-color: #ffffff;
}

button.dark {
  background-color: #333;
}

button.flat {
  border: 0;
}

button.g {
  background-color: #41b883;
}
button.r {
  background-color: #b84941;
}

button.g:hover {
  border: 1px solid #41b883;
  background-color: #fff;
  color: #333;
}
button.r:hover {
  border: 1px solid #b84941;
  background-color: #fff;
  color: #333;
}
</style>
