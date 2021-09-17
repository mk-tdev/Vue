<template>
  <the-header></the-header>

  <div class="main">
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <project-list :user="selectedUser"></project-list>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ProjectList from "./components/projects/ProjectList.vue";
import UserList from "./components/users/UserList.vue";
import USER_DATA from "./mock-data";

import { ref } from "vue";

export default {
  name: "App",
  components: {
    TheHeader,
    ProjectList,
    UserList,
  },
  setup() {
    const selectedUser = ref(null);
    const activeUsers = USER_DATA;

    function selectUser(uid) {
      selectedUser.value = activeUsers.find((usr) => usr.id === uid);
    }

    return {
      selectedUser,
      activeUsers,
      selectUser,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Glory:wght@300&display=swap");

* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Glory", sans-serif;
}
div.main {
  margin: 5rem 1rem;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem;
}
</style>
