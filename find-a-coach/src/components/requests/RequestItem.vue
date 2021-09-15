<template>
  <li>
    <div>
      Email: <a :href="emailLink">{{ email }}</a>
    </div>

    <p>Message: {{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  border-left: 5px solid #0d7265;
}

a {
  color: #0d7265;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #2c2b2c;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
