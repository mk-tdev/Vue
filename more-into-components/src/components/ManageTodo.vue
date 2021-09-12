<template>
  <div>
    <h2>
      Manage Todos
    </h2>

    <input type="text" ref="todo" />

    <button @click="setTodo">Set Todo</button>

    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <template #default>
          <p>
            Something went wrong
          </p>
          <button @click="confirmError">Okay</button>
        </template>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setTodo() {
      const entered = this.$refs.todo.value;

      if (entered === "") {
        this.inputIsInvalid = true;
      } else {
        this.inputIsInvalid = false;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
