<template>
  <Modal @onClose="close">
    <div class="modal-style">
      <div>
        <slot></slot>
      </div>
      <div class="button-row">
        <Button :onClick="close" class="close-button">Close</Button>
        <Button :onClick="ok">Ok</Button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import Button from "./Button";

export default {
  name: "AddContactModal",
  components: {
    Modal,
    Button,
  },
  props: {
    onClose: Function,
    onOk: Function,
  },
  methods: {
    close: function () {
      if (this.onClose) this.onClose();
      this.$el.parentNode.removeChild(this.$el);
    },
    ok: function () {
      if (this.onOk) this.onOk();
      this.close();
    },
  },
};
</script>

<style scoped>
.modal-style {
  min-width: 300px;
  padding: 20px;
}
.close-button {
  background-color: white;
  border: gray;
  color: black;
  margin-right: 10px;
}
.button-row {
  margin-top: 20px;
  text-align: right;
}
</style>



