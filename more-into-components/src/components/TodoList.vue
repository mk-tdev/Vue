<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <slot :todo="todo" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todos: ["Slots are very cool", "And very useful"],
    };
  },
};
</script>
