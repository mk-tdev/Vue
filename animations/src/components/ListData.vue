<template>
  <transition-group tag="ul" name="phones-list">
    <li v-for="phone in phones" :key="phone" @click="removePhone(phone)">
      {{ phone }}
    </li>
  </transition-group>

  <div>
    <input type="text" ref="userInput" />

    <button @click="addPhone">Add Phone</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phones: ["iPhone", "Pixel", "Samsung", "Oneplus", "Vivo"],
    };
  },
  methods: {
    addPhone() {
      this.phones.unshift(this.$refs.userInput.value);
    },
    removePhone(rp) {
      this.phones = this.phones.filter((p) => p !== rp);
    },
  },
};
</script>

<style scoped>
.phones-list-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.phones-list-enter-active {
  transition: all 0.8s ease-out;
}
.phones-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.phones-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.phones-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}
.phones-list-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.phones-list-move {
  transition: transform 0.8s ease;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}

li:hover {
  background-color: rgb(243, 156, 156);
}

input {
  font: inherit;
  padding: 0.35rem 0;
  margin: 0 10px;
}
</style>
