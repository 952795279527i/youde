import Vue from "vue";
import Vuex from "vuex";
import dataList from "./store";
Vue.use(Vuex);
const actions = {
  jia(context, value) {
    context.commit("JIA", value);
  },
  reduce(context, value) {
    context.commit("REDUCE", value);
  },
  OddEvent(context, value) {
    if (context.state.sum % 2) {
      context.commit("JIA", value);
    } else {
      context.commit("REDUCE", value);
    }
  },
  waitadd(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 10000);
  },
};
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  REDUCE(state, value) {
    state.sum -= value;
  },
};
const state = {
  sum: 0,
};
const getters = {
  bigSum(state) {
    return state.sum * 20;
  },
};
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  modules: {
    dataList,
  },
});
