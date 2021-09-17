import { createApp } from "vue";
import App from "./App.vue";

import BaseSearch from "./components/UI/BaseSearch.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-search", BaseSearch);
app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
