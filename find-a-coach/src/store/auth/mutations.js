export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAudoLogout(state) {
    state.didAutoLogout = true;
  }
}