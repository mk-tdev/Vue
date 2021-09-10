const app = {
  data() {
    return {
      title: "Vue To-do",
      todos: [],
      todo: "",
    };
  },
  computed: {},
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
  },
  watch: {},
};

Vue.createApp(app).mount("#todo");
