<template>
  <Modal @onClose="closeHandler">
    <div class="modal-style">
      <div>
        <slot></slot>
      </div>
      <div class="button-row">
        <Button :onClick="closeHandler" class="close-button">
          {{ close }}
        </Button>
        <Button :onClick="okHandler"> {{ ok }} </Button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import Button from "./Button";
import strings from "@/assets/strings";

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
  data: function () {
    return {
      close: strings.close,
      ok: strings.ok,
    };
  },
  methods: {
    closeHandler: function () {
      if (this.onClose) this.onClose();
      this.$el.parentNode.removeChild(this.$el);
    },
    okHandler: function () {
      if (this.onOk) this.onOk();
      this.closeHandler();
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



