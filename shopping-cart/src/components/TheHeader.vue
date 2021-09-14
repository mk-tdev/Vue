<template>
  <header>
    <div>
      <img src="../assets/logo.png" height="25" />
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart ({{ cartQty }})</router-link>
      <router-link v-if="userIsAuthenticated" to="/products">Admin</router-link>
    </div>
    <div>
      <base-button v-if="!userIsAuthenticated" @click="login" :mode="'flat'"
        >Login</base-button
      >
      <base-button v-else @click="logout" :mode="'flat'">Logout</base-button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQty() {
      return this.$store.getters["cart/cartQty"];
    },
    userIsAuthenticated() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("setAuthLogin");
    },
    logout() {
      this.$store.dispatch("setAuthLogout");
    },
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
