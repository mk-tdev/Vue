<template>
  <div>
    <h2>Your Cart</h2>

    <hr />

    <h4>Total Amount: ${{ cartTotal }}</h4>

    <div v-for="cartItem in cartItems" :key="cartItem.productId">
      <cart-item :product="cartItem" @removeItem="remove"></cart-item>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem },
  computed: {
    cartQty() {
      return this.$store.getters["cart/cartQty"];
    },
    cartItems() {
      return this.$store.getters["cart/cartItems"];
    },
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch("cart/removeFromCart", { prodId: id });
    },
  },
};
</script>

<style scoped></style>
