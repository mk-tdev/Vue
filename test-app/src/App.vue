<template>
  <Header :title="title" />

  <section class="container">
    <ul>
      <li v-for="movie of movies" :key="movie.id">
        <MovieDetail :movie="movie" />
      </li>
    </ul>
  </section>
</template>

<script>
import MovieDetail from "./components/MovieDetail.vue";
import Header from "./components/Header.vue";

const App = {
  components: {
    MovieDetail,
    Header,
  },
  data() {
    return {
      title: "Movies",
      showDetails: true,
      movies: [
        {
          id: "lor",
          name: "Lord Of the Rings",
          year: 2001,
          director: "Peter Jackson",
        },
        {
          id: "ave",
          name: "The Avengers",
          year: 2012,
          director: "Joss Whedon",
        },
      ],
    };
  },
  methods: {
    toggleDisplay() {
      this.showDetails = !this.showDetails;
    },
  },
};

export default App;
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  padding: 0 1rem;
}
</style>
