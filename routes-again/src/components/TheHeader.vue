<template>
  <header>
    <div>
      <img src="../assets/logo.png" height="25" />
      <router-link to="/allproducts">All Products</router-link>
      <router-link to="/allproducts/add">Add Product</router-link>
    </div>

    <div>
      <p>Vuex Counter: {{ counter }}</p>

      <base-button @click="increment">Inc</base-button>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const counter = computed(() => store.getters.counter);

    const store = useStore();

    function increment() {
      store.dispatch("increment");
    }

    return { counter, increment };
  },
};
</script>

<style scoped>
header {
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  background-color: #48484b;
  box-shadow: rgb(161, 160, 160) 0px 1px 4px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
}

header > div {
  align-items: center;
  display: grid;
  justify-items: center;
  grid-auto-flow: column;
  gap: 10px;
}

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

a:hover {
  color: #000000;
  background-color: #ffffff;
}

a.active {
  color: #000000;
  background-color: #ffffff;
}
</style>
