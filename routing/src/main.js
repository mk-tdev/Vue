import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

import TeamsList from "./components/teams/TeamsList.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

// https://next.router.vuejs.org/guide/#javascript

const routes = [
  {
    path: "/",
    redirect: "/teams",
  },
  {
    name: "teams",
    path: "/teams",
    meta: { needsAuth: true },
    components: {
      default: TeamsList,
      footer: TeamsFooter,
    },
    children: [
      {
        name: "team-members",
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
    name: "users",
    path: "/users",
    components: { default: UsersList, footer: UsersFooter },
    beforeEnter: (to, from, next) => {
      console.log({ to, from });
      next();
    },
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
  scrollBehavior(to, from, savedPosition) {
    // console.log({ to, from, savedPosition });

    return savedPosition ? savedPosition : { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // console.log({ to, from });

  next();
});

router.afterEach((to, from, failure) => {
  console.log("failed navigation", failure);
});

const app = createApp(App);

app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.mount("#app");
