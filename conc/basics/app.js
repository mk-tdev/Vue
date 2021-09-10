// App for basics

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

// App for events

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 10,
//       name: "Muthu",
//       age: 30,
//       confirmedName: "",
//       fullName: "",
//     };
//   },
//   watch: {
//     counter(value) {
//       this.counter = value > 50 ? 0 : value;
//     },
//     name(value, prevVal) {
//       this.fullName = value + " Kumar";
//     },
//   },
//   computed: {
//     // fullName() {
//     //   console.log("fullName");
//     //   return this.name + "Kumar";
//     // },
//   },
//   methods: {
//     confirmName() {
//       this.confirmedName = this.name;
//     },
//     getModifiedName() {
//       return "Some name";
//     },
//     increment() {
//       console.log("increment");
//       this.counter = this.counter + 1;
//     },
//     incrementByFive(inVal) {
//       console.log("incrementByFive");
//       this.counter = this.counter + inVal;
//     },
//     decrement() {
//       this.counter--;
//     },
//     setName(e, lname) {
//       this.name = e.target.value;
//     },
//     submitForm(event) {
//       console.log("Submitted");
//       // event.preventDefault();
//     },
//     reset() {
//       this.name = "";
//       this.age = "";
//       this.confirmedName = "";
//     },
//   },
// });

// app.mount("#events");

// App for styling

const styleApp = {
  data() {
    return {
      title: "Vue Styles!",
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
    updateBoxAState() {
      this.boxASelected = !this.boxCSelected;
      this.boxBSelected = !this.boxASelected;
      this.boxCSelected = !this.boxBSelected;
    },
  },
  watch: {},
};

Vue.createApp(styleApp).mount("#styling");
