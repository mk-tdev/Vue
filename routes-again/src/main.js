import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loggerMixin from "./mixins/logger";

// Global Components
import BaseContainer from "./components/BaseContainer.vue";
import BaseButton from "./components/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);

app.mixin(loggerMixin);
app.use(router);
app.use(store);

app.mount("#app");
