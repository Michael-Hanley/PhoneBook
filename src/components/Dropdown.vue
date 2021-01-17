<template>
  <div class="modal-backdrop">
    <Card class="modal">
      <slot></slot>
    </Card>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Dropdown   ",
  components: {
    Card,
  }
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
}
.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
