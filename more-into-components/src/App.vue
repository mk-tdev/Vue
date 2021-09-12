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

    <todo-list>
      <template #default="slotProps">
        <!-- {{ slotProps }} -->
        <h2>{{ slotProps.todo }} {{ slotProps["anotherProp"] }}</h2>
      </template>
    </todo-list>
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    TodoList,
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
