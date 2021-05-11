import Vue from "vue";
import Vuex from "vuex";

import root from "./root";
import surveys from "./modules/surveys";

Vue.use(Vuex);

const modules = { surveys };

for (let mod in modules) {
  modules[mod].namespaced = true;
}

export default new Vuex.Store({
  ...root,
  modules,
});
