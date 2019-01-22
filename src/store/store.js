import Vue from "vue";
import Vuex from "vuex";
import Type from "@/store/type";

Vue.use(Vuex);

const state = {
  user: {},
  token: ""
};

const getters = {
  getUser: state => state.user,
  getToken: state => state.token
};

const mutations = {
  [Type.SET_USER](state, user) {
    state.user = user;
  },
  [Type.SET_TOKEN](state, token) {
    state.token = token;
  }
};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
