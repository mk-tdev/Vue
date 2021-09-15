<template>
  <div class="product-item">
    <p>{{ product.name }}</p>

    <img :src="product.imgUrl" alt="laptop" />

    <p>$ {{ product.price }}</p>

    <p>
      {{ product.description }}
    </p>

    <router-link :to="productDetailLink">Details</router-link>
    <base-button :mode="'g'" @click="add({ id: product.id })"
      >Add to cart</base-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
  computed: {
    productDetailLink() {
      return {
        name: "product-detail",
        params: { productID: this.product.id },
      };
    },
  },
  props: ["product"],
  methods: {
    ...mapActions("cart", {
      add: "addToCart",
    }),
  },
};
</script>

<style scoped>
div.product-item {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 300px;
  border: 1px solid rgb(116, 115, 115);
  padding: 0 1rem;
  margin: 1rem 1rem;
  transition: all 0.3ms ease;
  transition-duration: 0.3s;
}

div.product-item img {
  margin: 0 -1rem;
}

div.product-item:hover {
  transform: scale(1.05);
  box-shadow: white 0px 1px 4px;
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
