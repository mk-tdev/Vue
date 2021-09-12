<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
  data() {
    return {
      activePage: "teams-list",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Muthu Kumar", role: "Engineer" },
        { id: "u2", fullName: "Mkumar", role: "Engineer" },
        { id: "u3", fullName: "John Doe", role: "Engineer" },
        { id: "u4", fullName: "Jane Doe", role: "Consultant" },
        { id: "u5", fullName: "Smitty", role: "Consultant" },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  background-color: #333;
  color: white;
}
</style>
