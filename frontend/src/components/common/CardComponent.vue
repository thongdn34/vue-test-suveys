<template>
  <div class="card" @click="onClickCard">
    <span class="card__name">{{ itemName }}</span>
    <span class="card__code">{{ itemCode }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    itemName: (vm) => vm.item.name || "",
    itemCode: (vm) => vm.item.code || "",
  },

  methods: {
    onClickCard() {
      this.$emit("select", this.item.code);
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  padding: 20px 0;

  &:hover {
    background-color: #ececec;
  }

  &__name,
  &__code {
    width: 100%;
  }
}
</style>
