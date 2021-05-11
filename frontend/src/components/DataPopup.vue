<template>
  <popup class="data-popup" ref="popup">
    <h1>Result of survey</h1>
    <div>
      <p class="data-popup__header">
        <span><b>Name:</b> {{ surveyName }} </span>
        <span><b>Code:</b> {{ surveyCode }} </span>
      </p>
      <div class="data-popup__body">
        <survey
          v-for="survey in surveyDetail"
          :key="survey.code"
          :survey="survey"
        />
      </div>
    </div>
  </popup>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Popup from "./common/Popup.vue";
import Survey from "./common/Survey.vue";
export default {
  name: "DataPopup",
  components: { Popup, Survey },
  computed: {
    ...mapState("surveys", ["surveyDetail"]),
    ...mapGetters("surveys", ["selectedSurvey"]),

    surveyName: (vm) => vm?.selectedSurvey?.name || "",
    surveyCode: (vm) => vm?.selectedSurvey?.code || "",
  },

  methods: {
    toggle(value) {
      this.$refs.popup.toggle(value);
    },

    open() {
      this.toggle(true);
    },

    close() {
      this.toggle(false);
    },
  },
};
</script>

<style lang="scss">
.data-popup {
  &__header {
    span:nth-child(1) {
      margin-right: 10px;
    }
  }

  &__body {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
