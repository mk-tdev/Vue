import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "../components/products/ProductsList.vue";
import ProductItemDetail from "../components/products/ProductItemDetail.vue";
import CartDetails from "../components/cart/CartDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    name: "products",
    path: "/products",
    meta: { needsAuth: false },
    component: ProductsList,
    children: [
      {
        name: "product-detail",
        path: ":productID",
        component: ProductItemDetail,
        props: true,
      },
    ],
  },
  {
    name: "cart",
    path: "/cart",
    component: CartDetails,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/products",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
