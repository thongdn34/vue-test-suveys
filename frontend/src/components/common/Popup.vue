<template>
  <div :class="['popup', isShow && '--show']">
    <div class="popup__mask" @click="close" />
    <div class="popup__wrapper">
      <button class="popup__close-btn" type="button" @click="close">
        CLOSE
      </button>
      <div class="popup__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",

  data: () => ({ isShow: false }),

  methods: {
    toggle(value) {
      this.isShow = typeof value === "boolean" ? value : !this.isShow;
    },

    open() {
      this.toggle(true);
      this.$emit("open");
    },

    close() {
      this.toggle(false);
      this.$emit("close");
    },
  },

  mounted() {
    this._close = this.close.bind(this);

    this.$bus.$on("esc", this._close);
  },

  destroyed() {
    this.$bus.$off("esc", this._close);
  },
};
</script>

<style lang="scss">
.popup {
  $popup-outter-duration: 0.2s;
  $popup-inner-duration: 0.4s;

  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all $popup-outter-duration ease $popup-inner-duration;
  z-index: z-index(popup);

  &.\--show {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }

  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(#000, 0.7);
  }

  &__wrapper {
    position: relative;
    display: flex;
    width: 61.4%;
    height: auto;
    max-height: 61.2%;
    padding: 5.5rem 3.5rem 6.7rem 5rem;
    margin-top: -4.8%;
    padding: 6rem 2rem 3rem 3.6rem;
    background-color: #ffffff;
    opacity: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transform: translateY(-100vh) translateZ(0);
    transition-duration: $popup-inner-duration;
    transition-timing-function: ease;
    transition-property: transform, opacity;

    .popup.\--show & {
      opacity: 1;
      transform: translateY(0) translateZ(0);
      transition-delay: $popup-outter-duration;
    }
  }

  &__close-btn {
    appearance: none;
    position: absolute;
    top: 2rem;
    right: 1.8rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    z-index: 1;
    cursor: pointer;
  }

  &__body {
    width: 100%;
    padding-right: 1rem;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
