// const app = Vue.createApp({
//   data() {
//     return {
//       courseGoalTemplate: "<h2>Finish the course and master Vue!</h2>",
//       courseGoal: "Finish the course and master Vue!",
//       courseTarget: "Master Vue! and build apps!",
//       templateStr: '<h3>Should be okay!</h3>',
//       vueLink: "https://v3.vuejs.org/",
//       dateVal: new Date(),
//       bookImg: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80',
//     };
//   },
//   methods: {
//     outputGoal() {
//       const randomNumber = Math.random();
//       console.log(this);
//       return randomNumber < 0.5 ? this.courseTarget : this.courseGoal;
//     },
//   },
// });

// app.mount("#user-goal");

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    increment() {
      this.counter = this.counter + 1;
    },
    incrementByFive(inVal) {
      this.counter = this.counter + inVal;
    },
    decrement() {
      this.counter--;
    },
    setName(e, lname) {
      this.name = e.target.value + " " + lname;
    },
    submitForm(event) {
      console.log("Submitted");
      // event.preventDefault();
    },
  },
});

app.mount("#events");
