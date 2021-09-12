<template>
  <div>
    <TheHeader />
    <input type="text" ref="welcomeTxt" v-on:keyup.enter="setText" />
    {{ message }}

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
  methods: {
    setText() {
      this.message = this.$refs.welcomeTxt.value;
    },
  },
  data() {
    return {
      message: "",
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
