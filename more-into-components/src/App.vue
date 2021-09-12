<template>
  <div>
    <TheHeader />

    <button @click="setSelectedComp('manage-todo')">Manage Todo</button>
    <button @click="setSelectedComp('active-todo')">Active Todo</button>

    <manage-todo v-if="selectedComponent === 'manage-todo'"></manage-todo>
    <active-todo v-if="selectedComponent === 'active-todo'"></active-todo>

    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>

    <div>
      <label>For ref Reference</label>
      <input
        class="ref-input"
        type="text"
        ref="welcomeTxt"
        v-on:keyup.enter="setText"
      />
      {{ message }}
    </div>

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
import ManageTodo from "./components/ManageTodo.vue";
import ActiveTodo from "./components/ActiveTodo.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    UserInfo,
    BadgeList,
    TodoList,
    ManageTodo,
    ActiveTodo,
  },
  methods: {
    setText() {
      this.message = this.$refs.welcomeTxt.value;
    },
    setSelectedComp(comp) {
      this.selectedComponent = comp;
    },
  },
  data() {
    return {
      message: "",
      selectedComponent: "active-todo",
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

.ref-input {
  margin: 1rem;
}
</style>
