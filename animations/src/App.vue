<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <div class="container">
    <list-data></list-data>
  </div>

  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">
      Animate
    </button>
  </div>

  <div class="container">
    <transition
      name="jpara"
      @before-enter="beforeEnterTransition"
      @before-leave="beforeLeaveTransition"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="jpVisible">Using Javascript Animate me!</p>
    </transition>

    <button @click="updateJPVisible">Toggle JS P!</button>
  </div>

  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnterTransition"
      @before-leave="beforeLeaveTransition"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="isPVisible">This is visible sometimes</p>
    </transition>

    <button @click="updatePVisible">Toggle paragraph!</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="toggleUser" v-if="!userDisplay">Show User</button>
      <button @click="toggleUser" v-else>Hide User</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from "./components/ListData.vue";

export default {
  name: "App",
  components: {
    ListData,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      isPVisible: false,
      userDisplay: false,
      jpVisible: false,
    };
  },
  methods: {
    toggleUser() {
      this.userDisplay = !this.userDisplay;
    },
    updatePVisible() {
      this.isPVisible = !this.isPVisible;
    },
    updateJPVisible() {
      this.jpVisible = !this.jpVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    beforeEnterTransition(el) {
      console.log("beforeEnterTransition: ", el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter: ", el);
      let round = 1;
      const interval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter: ", el);
    },
    leave(el, done) {
      console.log("leave: ", el);
      let round = 1;
      const interval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;

        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    beforeLeaveTransition(el) {
      console.log("beforeLeaveTransition: ", el);
      el.style.opacity = 1;
    },
    afterLeave(el) {
      console.log("afterLeave: ", el);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #302c2d;
  border-radius: 5px;
  background-color: #302c2d;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #302c2d;
  border-color: #302c2d;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 0.7rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 3px;
}
.animate {
  /* transform: translateX(-50px); */
  animation: slide-scale 1s ease-out forwards;
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 0.3s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  30% {
    transform: translateX(-150px) scale(1.1);
  }
  70% {
    transform: translateX(-120px) scale(1.3);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
