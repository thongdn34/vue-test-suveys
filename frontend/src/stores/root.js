import $http from "axios";
import { baseUrl } from "../utils/constant";

const state = {
  isLoading: false,
  errors: "",
};

const getters = {};

const mutations = {
  changeLoadingStatus(state, status) {
    state.isLoading = status;
  },

  setErrors(state, errors) {
    state.errors = errors;
  },
};

const actions = {
  async getData({ dispatch }, config) {
    dispatch("changeLoadingStatus", true, { root: true });

    let isOptionString = typeof config === "string";
    let option = isOptionString ? { url: config } : config;

    option = { ...option, method: "GET", url: `${baseUrl}/${option.url}` };
    try {
      const { data } = await $http(option);
      return data;
    } catch (error) {
      dispatch("setErrors", error.message);
    }
    dispatch("changeLoadingStatus", false, { root: true });
  },

  changeLoadingStatus({ commit }, status) {
    commit("changeLoadingStatus", status);
  },
  setErrors({ commit }, errors) {
    commit("setErrors", errors);
  },
};

export default { state, getters, mutations, actions };
