<template>
  <base-button @click="login" v-if="!isAuth">
    Login
  </base-button>

  <base-button @click="logout" v-else>
    Logout
  </base-button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("setAuthLogin");
    },
    logout() {
      this.$store.dispatch("setAuthLogout");
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
