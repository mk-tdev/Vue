import { createRouter, createWebHistory } from "vue-router";

import CoachesDetails from "../pages/coaches/CoachesDetails.vue";
import CoachesRegister from "../pages/coaches/CoachesRegister.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import ContactCoaches from "../pages/requests/ContactCoaches.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue";
import NotFound from "../pages/NotFound.vue";

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
    component: CoachesRegister,
  },
  {
    name: "requests",
    path: "/requests",
    component: RequestsReceived,
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

export default router;
