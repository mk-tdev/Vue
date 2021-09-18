import { createRouter, createWebHistory } from "vue-router";

import AddProduct from "./components/pages/AddProduct.vue";
import AllProducts from "./components/pages/AllProducts.vue";
import ProductDetail from "./components/pages/ProductDetail.vue";

const routes = [
  {
    path: "/allproducts",
    component: AllProducts,
  },
  {
    path: "/allproducts/:pid",
    component: ProductDetail,
    // props: true,
  },
  {
    path: "/allproducts/add",
    component: AddProduct,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/allproducts",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
