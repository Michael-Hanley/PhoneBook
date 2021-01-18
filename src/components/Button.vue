<template>
  <button @click="onClick" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: false,
      default: () => null
    },
  },
};
</script>
<style scoped>
.button {
  border: none;
  background: #434343;
  color: #ffffff;
  font-weight: 100;
  padding: 8px 10px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
</style>