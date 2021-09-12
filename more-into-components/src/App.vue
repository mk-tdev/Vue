<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>

    <user-info
      :full-name="activeUser.name"
      :role="activeUser.role"
      :info-text="activeUser.description"
    >
    </user-info>
  </div>
</template>

<script>
export default {
  name: "App",
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
