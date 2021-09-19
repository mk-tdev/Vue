<template>
  <div class="backdrop" @click="closeDialog"></div>
  <dialog open>
    <header>
      <p>{{ title }}</p>
    </header>
    <div>
      <slot></slot>
    </div>
    <menu>
      <base-button @click="closeDialog" mode="dark">Close</base-button>
    </menu>
  </dialog>
</template>

<script>
export default {
  props: ["title"],
  emits: ["close"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(111 107 107 / 75%);
  z-index: 10;
}

dialog {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 30rem;
  background-color: white;
  z-index: 100;
  overflow: hidden;
}

p {
  margin: 0;
}

header {
  width: 100%;
  padding: 1rem;
  background-color: #202020;
  color: white;
}

dialog div {
  padding: 0 1rem;
}

menu {
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
