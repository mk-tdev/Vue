import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

import ActiveElement from "./components/ActiveElement.vue";
import MoviesBase from "./components/MoviesBase.vue";
import MoviesElement from "./components/MoviesElement.vue";
import MoviesGrid from "./components/MoviesGrid.vue";

const app = createApp(App);

app.component("active-element", ActiveElement);
app.component("movies-base", MoviesBase);
app.component("movies-element", MoviesElement);
app.component("movies-grid", MoviesGrid);

app.mount("#app");
