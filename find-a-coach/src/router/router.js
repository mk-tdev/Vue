import { createRouter, createWebHistory } from "vue-router";

import CoachesDetails from "../pages/coaches/CoachesDetails.vue";
import CoachesRegister from "../pages/coaches/CoachesRegister.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import ContactCoaches from "../pages/requests/ContactCoaches.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue";
import UserAuth from "../pages/auth/UserAuth.vue";
import NotFound from "../pages/NotFound.vue";
import store from "../store/store";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    meta: { needsAuth: false },
    component: CoachesList,
  },
  {
    name: "coaches-details",
    path: "/coaches/:id",
    component: CoachesDetails,
    props: true,
    children: [
      {
        name: "contact",
        path: "contact",
        component: ContactCoaches,
        props: true,
      },
    ],
  },
  {
    name: "register",
    path: "/register",
    meta: { needsAuth: true },
    component: CoachesRegister,
  },
  {
    name: "requests",
    path: "/requests",
    meta: { needsAuth: true },
    component: RequestsReceived,
  },
  {
    name: "auth",
    path: "/auth",
    meta: { needsUnAuth: true },
    component: UserAuth,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
});

router.beforeEach((to, _, next) => {
  if (to.meta.needsAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.needsUnAuth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
