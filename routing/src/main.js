import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";

// https://next.router.vuejs.org/guide/#javascript

const routes = [
  {
    path: "/",
    redirect: "/teams",
  },
  {
    path: "/teams",
    component: TeamsList,
    children: [
      {
        path: ":teamId",
        component: TeamMembers,
        props: true,
      },
    ],
    // alias: "/", // intead of putting a separate entry for '/'
  },
  // {
  //   path: "/teams/:teamId",
  //   component: TeamMembers,
  //   props: true,
  // },
  {
    path: "/users",
    component: UsersList,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/teams",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

const app = createApp(App);

app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.mount("#app");
