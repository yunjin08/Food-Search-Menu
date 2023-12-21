import { createStore } from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutation";
import * as actions from "./actions";

const store = createStore({
  actions,
  mutations,
  getters,
  state,
});

export default store;
