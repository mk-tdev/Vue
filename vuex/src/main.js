import { createApp } from "vue";

import App from "./App.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseButton from "./components/UI/BaseButton.vue";

import store from "./store";

const app = createApp(App);

app.use(store);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
