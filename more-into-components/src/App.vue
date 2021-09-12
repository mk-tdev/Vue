<template>
  <div>
    <TheHeader />

    <BadgeList />

    <UserInfo
      :full-name="activeUser.name"
      :role="activeUser.role"
      :info-text="activeUser.description"
    ></UserInfo>
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
  },
  data() {
    return {
      activeUser: {
        name: "Muthu Kumar",
        description: "Frontend Developer",
        role: "admin",
      },
    };
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
}
</style>
