<template>
  <popup class="error-popup" ref="popup">
    <p>Opps! You are running http server without CORS option</p>
    <p>Restart http server by command with CORS option <q>--cors</q></p>
    <p>And clear cache browser. <b>IMPORTANT!!!</b></p>
  </popup>
</template>

<script>
import Popup from './common/Popup.vue';
export default {
	components: { Popup },
  name: "ErrorPopup",

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
}
</script>