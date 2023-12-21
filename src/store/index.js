import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutation";
import actions from "./actions";

const store = createStore({
  actions,
  mutations,
  getters,
  state,
});

export default store;
