<template>
  <div class="survey">
    <p class="survey__question">{{ question }}</p>
    <!-- type qcm -->
    <div class="survey__result" v-if="type === 'qcm'">
      <ul class="survey__qcm">
        <li v-for="(val, keyName) in result" :key="keyName">
          <span>{{ keyName }}: {{ val }} &#x2605;</span>
        </li>
      </ul>
    </div>

    <!-- type numeric -->
    <div class="survey__result" v-else-if="type === 'numeric'">
      <p class="survey__numberic">{{ result }}</p>
    </div>

    <!-- type date -->
    <div class="survey__result" v-else>
      <p v-for="item in result" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Survey",
  props: {
    survey: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    question: (vm) => vm.survey?.label || "",
    type: (vm) => vm.survey?.type || "",
    result: (vm) => {
      if (vm.type === "date") {
        return vm.survey?.result.map((i) => new Date(i).toLocaleString());
      }

      if (vm.type == "numeric") {
        return vm.survey?.result.toFixed(2);
      }

      return vm.survey?.result || "";
    },
  },
};
</script>
<style lang="scss">
.survey {
  &__question {
    font-weight: bold;
  }

  &__numberic {
    font-size: 35px;
  }

  &__qcm {
    li {
      margin: 5px 0;
    }
  }
}
</style>
