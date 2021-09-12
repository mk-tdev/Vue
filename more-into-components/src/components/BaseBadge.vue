<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: ["type", "caption"],
  mounted() {
    console.log(this.caption);
  },
  computed: {
    classes() {
      return {
        "badge--admin": this.type === "admin",
        "badge--author": this.type === "author",
      };
    },
  },
};
</script>

<style>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: #ccc;
  color: #333;
}
.badge--admin {
  background-color: #500303;
  color: white;
}

.badge--author {
  background-color: #0a634c;
  color: white;
}
</style>
