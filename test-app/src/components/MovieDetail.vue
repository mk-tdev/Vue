<template>
  <h2>{{ movie.name }}</h2>

  <p>{{ msg }}</p>

  <button @click="toggleDisplay">
    {{ showDetails ? "Hide" : "Show" }} Details
  </button>

  <ul v-if="showDetails">
    <li><strong>Year:</strong> {{ movie.year }}</li>
    <li><strong>Director:</strong>{{ movie.director }}</li>
  </ul>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["movie"],
  data() {
    return {
      showDetails: true,
    };
  },
  methods: {
    toggleDisplay() {
      console.log(this.movie);
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  min-width: calc(100% - 30px);
}

li {
  padding: 10px 0;
  margin: 10px 0;
}
</style>
