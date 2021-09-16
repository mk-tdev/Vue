<template>
  <the-header></the-header>
  <div class="main">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
  watch: {
    didAutoLogout(currValue, oldValue) {
      console.log({ currValue, oldValue });
      if (currValue && currValue !== oldValue) {
        this.$router.replace("/coaches");
      }
    },
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap");

* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Glory", sans-serif;
}
div.main {
  margin: 5rem 1rem;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-leave-to {
  opacity: 1;
  transform: translateY(30px);
}
</style>
