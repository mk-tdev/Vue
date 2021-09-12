<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  width: 40%;
  left: 30%;
  padding: 1rem;
  margin: 0;
  background-color: white;
  border: 2px solid red;
  box-shadow: 0 0px 8px red;
}
</style>
