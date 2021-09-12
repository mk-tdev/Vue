<template>
  <section>
    <div>
      <h3>{{ fullName }}</h3>

      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
  data() {
    return {};
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 30rem;
  border-radius: 6px;
  box-shadow: 0 0 3px 2px grey;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
