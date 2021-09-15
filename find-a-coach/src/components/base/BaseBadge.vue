<template>
  <span class="badge" :class="type">
    {{ labelTxt }}
  </span>
</template>

<script>
export default {
  props: ["type", "label"],
  computed: {
    labelTxt() {
      return (this.label + "").toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  font-size: 0.8em;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  border-radius: 10px;
  color: white;
  background-color: wheat;
}
.swimming {
  background-color: #00a19d;
}
.running {
  background-color: #6f69ac;
}
.football {
  background-color: #911f27;
}
.dance {
  background-color: #1e3163;
}
.acting {
  background-color: #420516;
}
.wrestling {
  background-color: #865439;
}
</style>
