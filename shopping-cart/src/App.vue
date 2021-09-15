<template>
  <the-header></the-header>

  <div class="main">
    <base-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </base-container>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

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
</style>
