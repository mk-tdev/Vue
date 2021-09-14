import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

// Global Components
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);

app.use(router);
app.use(store);

app.mount("#app");

// Header -> Products Cart(0)  Login

// Cart -> Total Amount with list of products

// Products -> list of products with picture and add to cart button
