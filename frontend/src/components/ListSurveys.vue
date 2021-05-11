<template>
  <div class="list-surveys">
    <div class="list-surveys__table">
      <div class="list-surveys__header">
        <p class="list-surveys__header-text">Name</p>
        <p class="list-surveys__header-text">Code</p>
      </div>
      <div class="list-surveys__header-body">
        <ul class="list-surveys__list">
          <li
            v-for="item in realList"
            :key="item.name"
            class="list-surveys__item"
          >
            <card-component :item="item" @select="onClickItem" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CardComponent from "./common/CardComponent.vue";
export default {
  components: { CardComponent },
  name: "ListSurveys",
  computed: {
    ...mapState("surveys", ["list", "selectedSurveyId"]),
    ...mapGetters("surveys", ["filteredSurvey"]),
    realList: (vm) => {
      let list = vm.filteredSurvey;

      if (!list.length) {
        list = vm.list;
      }

      return list;
    },
  },

  methods: {
    ...mapActions("surveys", ["getList", "selectSurvey", "getDetailSurvey"]),

    async fetchData() {
      await this.getList();
    },

    async getASurvey() {
      await this.getDetailSurvey();
    },

    async onClickItem(id) {
      if (id !== this.selectedSurveyId) {
        this.selectSurvey(id);
        await this.getASurvey();
      }
      this.$bus.$emit("show-data");
    },
  },

  async mounted() {
    if (!this.list[0]) {
      this.fetchData();
    }
  },
};
</script>

<style lang="scss">
.list-surveys {
  &__list {
    list-style-type: none;
    padding: 0;
  }
  &__header {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 3px solid #2c3e50;
  }

  &__header-text {
    width: 100%;
  }
}
</style>
