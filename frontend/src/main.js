import Vue from "vue";
import App from "./App.vue";

import "./assets/styles/base.scss";
import "./assets/styles/classes.scss";
import "./assets/styles/bg-image.scss";

import store from "./stores";
import "./plugins/";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
