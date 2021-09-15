import { createStore } from "vuex";
import coaches from "./coaches";
import requests from "./requests";

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
  },
  state() {
    return {
      isLoggedIn: false,
      userId: "c5",
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
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
