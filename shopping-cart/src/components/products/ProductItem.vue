<template>
  <div class="product-item">
    <p>{{ product.name }}</p>

    <img :src="product.imgUrl" alt="laptop" />

    <p>$ {{ product.price }}</p>

    <p>
      {{ product.description }}
    </p>

    <router-link :to="productDetailLink">Details</router-link>
    <base-button @click="add({ id: product.id })">Add to cart</base-button>
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
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 1rem;
}
</style>
