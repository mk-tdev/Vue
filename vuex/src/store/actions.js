export default {
  setAuthLogin(context) {
    context.commit("setAuth", { isAuth: true });
  },
  setAuthLogout(context) {
    context.commit("setAuth", { isAuth: false });
  },
}