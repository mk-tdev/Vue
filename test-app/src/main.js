import { createApp } from "vue";
import App from "./App.vue";
import NewMovie from "./components/NewMovie.vue";

const app = createApp(App);

app.component("new-movie", NewMovie);

app.mount("#app");
