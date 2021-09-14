import { createStore } from "vuex";

import products from "./products/products";
import cart from "./cart/cart";

const store = createStore({
  modules: {
    prods: products,
    cart: cart,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    setAuthLogin(context) {
      context.commit("setAuth", { isAuth: true });
    },
    setAuthLogout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
