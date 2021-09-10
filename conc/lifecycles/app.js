const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      message: "Learning Vue!",
    };
  },
  methods: {
    saveInput(event) {
      this.userInput = event.target.value;
    },
    setText() {
      this.message = this.userInput;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmount() {
    console.log("unmoununmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

// Life Cycle
