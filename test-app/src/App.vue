<template>
  <Header :title="title" />

  <new-movie @add-movie="addMovie"></new-movie>

  <section class="container">
    <ul>
      <li v-for="movie of movies" :key="movie.id">
        <MovieDetail
          :movie="movie"
          :isFav="movie.isFavorite"
          @toggle-favorite="toggleFavState"
          @delete="deleteMovie"
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
    addMovie(name, year, director) {
      const newMovie = {
        id: new Date().toISOString(),
        name: name,
        year: year,
        director: director,
        isFavorite: false,
      };

      this.movies.unshift(newMovie);
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
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
