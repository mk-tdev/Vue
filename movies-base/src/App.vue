<template>
  <header>
    <h3>Movies Base</h3>
  </header>

  <active-element
    :movie-name="activeMovie && activeMovie.name"
    :story="activeMovie && activeMovie.story"
  >
  </active-element>

  <movies-base></movies-base>
  <!-- <movies-base :movies="movies" @select-movie="selectMovie"></movies-base> -->
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      movies: this.movies,
      selectMovie: this.selectMovie,
    };
  },
  methods: {
    selectMovie(movieId) {
      this.activeMovie = this.movies.find((movie) => movie.id === movieId);
    },
  },
  data() {
    return {
      activeMovie: null,
      movies: [
        {
          id: "seup",
          name: "Shoot 'Em Up",
          year: "2007",
          director: "Michael Davis",
          story:
            "A  man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.",
        },
        {
          id: "glad",
          name: "Gladiator",
          year: "2000",
          director: "Ridley Scott",
          story:
            "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        },
        {
          id: "spr",
          name: "Saving Private Ryan",
          year: "1998",
          director: "Steven Spielberg",
          story:
            "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
header {
  padding: 0.1rem 0.5rem;
  background-color: #35495e;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button {
  font: inherit;
  border: 1px solid #159cd1;
  background-color: #159cd1;
  color: white;
  padding: 0.35rem 0.6rem;
  border-radius: 30px;
  cursor: pointer;
}
</style>
