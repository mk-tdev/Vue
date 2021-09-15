<template>
  <div>
    <h2>Products List</h2>

    <router-view></router-view>

    <div class="products">
      <product-item
        :product="product"
        v-for="product in products"
        :key="product.id"
      ></product-item>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1000px) {
}
</style>
