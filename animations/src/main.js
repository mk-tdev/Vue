import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";
import AllPhones from "./pages/AllPhones.vue";
import PhoneDetail from "./pages/PhoneDetail.vue";

const routes = [
  {
    path: "/",
    component: AllPhones,
  },
  {
    path: "/phone",
    component: PhoneDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.component("base-modal", BaseModal);

router.isReady().then(() => {
  app.mount("#app");
});
