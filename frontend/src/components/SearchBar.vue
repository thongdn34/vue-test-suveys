<template>
  <div class="search-bar">
    <input
      type="search"
      name="searchInput"
      id="searchInput"
      placeholder="Type name or code of survey"
      v-model="searchValue"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  data: () => ({
    searchValue: "",
  }),
  methods: {
    ...mapActions("surveys", ["setSearchWord"]),
    filterSurvey(word) {
      this.setSearchWord(word);
    },
  },
  watch: {
    searchValue(val) {
      this.filterSurvey(val);
    },
  },
};
</script>
