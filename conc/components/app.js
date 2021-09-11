const app = {
  data() {
    return {
      test: "Test",
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
};

const vueApp = Vue.createApp(app);

const movieDetail = {
  template: `
    <li :key="movie.id">
      <h2>{{movie.name}}</h2>
      <button @click="toggleDisplay"> {{showDetails ? 'Hide': 'Show'}} Details</button>

      <ul v-if="showDetails">
        <li><strong>Year:</strong> {{movie.year}}</li>
        <li><strong>Director:</strong>{{movie.director}}</li>
      </ul>

    </li>
  `,
  data() {
    return {
      showDetails: true,
      movie: {
        id: "lor",
        name: "Lord Of the Rings",
        year: 2001,
        director: "Peter Jackson",
      },
    };
  },
  methods: {
    toggleDisplay() {
      this.showDetails = !this.showDetails;
    },
  },
};
vueApp.component("movie-details", movieDetail);

vueApp.mount("#app");
