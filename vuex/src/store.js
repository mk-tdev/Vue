import { createStore } from "vuex";

const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      // console.log(context);
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    points: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      console.log(state);
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
