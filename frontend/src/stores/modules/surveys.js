import { path } from "../../utils/constant";

const state = {
  list: [],
  selectedSurveyId: "",
  surveyDetail: {},
  searchWord: "",
};

const getters = {
  selectedSurvey({ list, selectedSurveyId }) {
    return list.find(({ code }) => code === selectedSurveyId);
  },
  filteredSurvey({ list, searchWord }) {
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.code.toLowerCase().includes(searchWord.toLowerCase())
    );
  },
};

const mutations = {
  setList(state, data) {
    state.list = data;
  },
  selectSurvey(state, id) {
    state.selectedSurveyId = id;
  },
  setSurvey(state, data) {
    state.surveyDetail = data;
  },
  setSearchWord(state, word) {
    state.searchWord = word;
  },
};

const actions = {
  async getList({ dispatch }) {
    const data = await dispatch("getData", { url: path.list }, { root: true });

    dispatch("setList", data);
  },
  async getDetailSurvey({ dispatch }) {
    const data = await dispatch(
      "getData",
      { url: `/${state.selectedSurveyId}.json` },
      { root: true }
    );

    dispatch("setSurvey", data);
  },

  selectSurvey({ commit }, id) {
    commit("selectSurvey", id);
  },
  setList({ commit }, data) {
    commit("setList", data);
  },
  setSurvey({ commit }, data) {
    commit("setSurvey", data);
  },
  setSearchWord({ commit }, word) {
    commit("setSearchWord", word);
  },
};

export default { state, getters, mutations, actions };
