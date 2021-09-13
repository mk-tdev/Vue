import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./components/pages/TeamsList.vue";
import TeamsFooter from "./components/pages/TeamsFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/pages/UsersList.vue";
import UsersFooter from "./components/pages/UsersFooter.vue";

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

export default router;