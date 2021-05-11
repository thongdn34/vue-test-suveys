import Vue from 'vue'

const EventBus = new Vue()

function onDocumentKeyUp ({ keyCode }) {
  if (keyCode === 27) {
    EventBus.$emit('esc')
  }
}

document.addEventListener('keyup', onDocumentKeyUp)

Vue.use({
  install (vm) {
    vm.prototype.$bus = EventBus
  }
})
