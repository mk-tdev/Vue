<template>
  <Header :title="title" />

  <section class="container">
    <ul>
      <li v-for="movie of movies" :key="movie.id">
        <MovieDetail
          :movie="movie"
          :isFav="movie.isFavorite"
          @toggle-favorite="toggleFavState"
        />
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
      movies: [
        {
          id: "lor",
          name: "Lord Of the Rings",
          year: 2001,
          director: "Peter Jackson",
          isFavorite: false,
        },
        {
          id: "ave",
          name: "The Avengers",
          year: 2012,
          director: "Joss Whedon",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavState(id) {
      const movie = this.movies.find((movie) => movie.id === id);
      movie.isFavorite = !movie.isFavorite;
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
