import { createStore } from "vuex";
import coaches from "./coaches";
import requests from "./requests";
import auth from "./auth";

const store = createStore({
  modules: {
    coaches: coaches,
    requests: requests,
    auth: auth,
  },
});

export default store;
