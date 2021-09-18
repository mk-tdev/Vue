<template>
  <the-header></the-header>

  <div class="main">
    <base-container>
      <router-view> </router-view>
    </base-container>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },

  setup() {
    const products = ref([
      {
        id: "p1",
        title: "MI ZZEN 20000 mAh Power Bank",
        description:
          "Power Bank is a high quality product manufactured by using best quality components and parts including high capacity original A grade Cell Lithium –Ion.",
        price: 15.99,
      },
      {
        id: "p2",
        title: "Paper pebbles Global Sketch Book Sketch Pad ",
        description:
          "Peper Pebbles Mordern Home Decor a fine addition to a household, All the products are designed with the top home decors to match the choice of every household in India.",
        price: 12.99,
      },
    ]);

    function addProduct(productData) {
      const newProduct = {
        id: new Date().toISOString(),
        title: productData.title,
        description: productData.description,
        price: productData.price,
      };
      products.value.push(newProduct);
    }

    provide("products", products);
    provide("addProduct", addProduct);

    return {
      products,
    };
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
div.main {
  margin-top: 5rem;
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
