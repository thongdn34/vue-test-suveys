<template>
  <div id="app" class="container">
    <h1>Survey</h1>
    <search-bar />
    <list-surveys />
    <data-popup ref="dataPopup" />
    <error-popup ref="errorPopup" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DataPopup from "./components/DataPopup.vue";
import ErrorPopup from './components/ErrorPopup.vue';
import ListSurveys from "./components/ListSurveys.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    ListSurveys,
    DataPopup,
    SearchBar,
    ErrorPopup,
  },

  computed: {
    ...mapState(["errors"]),
    ...mapState("surveys", ["list"]),
  },

  methods: {
    ...mapActions("surveys", ["getList"]),

    async showDataPopup() {
      this.$refs.dataPopup?.open();
    },

    showErrorPopup() {
      this.$refs.errorPopup?.open();
    }
  },

  watch: {
    errors(val) {
      console.log('=asdas', val)
      if (val.includes('Network Error')) {
        this.showErrorPopup();
      }
    }
  },

  async mounted() {
    this.$bus.$on("show-data", this.showDataPopup);
  },
};
</script>
