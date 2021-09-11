<template>
  <h2>{{ movie.name }} {{ isFav ? "(Fav)" : null }}</h2>

  <p>{{ msg }}</p>

  <button @click="toggleDisplay">
    {{ showDetails ? "Hide" : "Show" }} Details
  </button>
  <button @click="toggleFav">
    Toggle Fav
  </button>

  <ul v-if="showDetails">
    <li><strong>Year:</strong> {{ movie.year }}</li>
    <li><strong>Director:</strong>{{ movie.director }}</li>
  </ul>
</template>

<script>
//https://v3.vuejs.org/guide/component-props.html#prop-validation

class Movie {
  constructor(name, year, director, id) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.id = id;
  }
}

export default {
  name: "MovieDetail",
  // emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function(id) {
      console.log(!!id);
      return !!id;
    },
  },
  // props: ["movie"],
  props: {
    // movie: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // },
    movie: Movie,
    isFav: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showDetails: true,
      // isItFav: this.isFav,
    };
  },
  methods: {
    toggleDisplay() {
      this.showDetails = !this.showDetails;
    },
    toggleFav() {
      // this.isItFav = !this.isItFav;

      this.$emit("toggle-favorite", this.movie.id);
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
