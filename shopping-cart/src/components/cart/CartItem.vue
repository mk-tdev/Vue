<template>
  <base-container>
    <div class="cart-item">
      <img :src="product.image" alt="" />
      <h3>{{ product.title }}</h3>

      <div class="item">
        <p>Price per item: ${{ product.price }}</p>
        <p>Quantity: {{ product.qty }}</p>
      </div>

      <p>Total ${{ itemTotal }}</p>

      <base-button :mode="'r'" @click="$emit('remove-item', product.productId)"
        >Remove</base-button
      >
    </div>
  </base-container>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    itemTotal() {
      return (this.product.price * this.product.qty).toFixed(2);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
}

img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
