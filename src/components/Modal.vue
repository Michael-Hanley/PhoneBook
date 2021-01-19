<template>
  <div id="modalBackdrop" class="modal-backdrop" @click="onClose">
    <Card class="modal">
      <slot></slot>
    </Card>
  </div>
</template>

<script>
import Card from './Card';
import { escape } from '@/utils/escape';

export default {
  name: 'modal',
  mixins: [escape],
  components: {
    Card,
  },
  methods: {
    escapeHandler: function () {
      this.$emit('onClose');
    },
    onClose: function (e) {
      if (e.target.id === 'modalBackdrop') {
        this.$emit('onClose');
      }
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
