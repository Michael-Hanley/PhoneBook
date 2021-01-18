<template>
  <Modal @onClose="onClose">
    <div class="modal-style">
      Add New Contact
      <div>
        <InputField
          ref="inputRef"
          class="input-field"
          autocomplete="off"
          inputId="nameInput"
          v-model="name"
          label="Name"
          placeholder="Contact Name"
        />
      </div>
      <hr class="divider" />
      <div v-for="(number, index) in numbers" :key="index">
        <ContactNumberInput
          :index="index"
          v-on:removeNumber="removeNumber"
          v-on:input="editNumber"
        ></ContactNumberInput>
        <div v-if="numbers.length > 1 && numbers.length !== index + 1">
          <hr class="divider" />
        </div>
      </div>
      <div>
        <Button :onClick="addNumber" class="add-button"
          >Add Another Number?</Button
        >
      </div>
      <div class="button-row">
        <Button :onClick="onClose" class="close-button">Close</Button>
        <Button :onClick="onSubmit">Submit</Button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import ContactNumberInput from "./ContactNumberInput";
import { addContact } from "../store";

export default {
  name: "AddContactModal",
  components: {
    ContactNumberInput,
    Modal,
    InputField,
    Button,
  },
  data: function () {
    return initialState();
  },
  mounted: function () {
    this.$refs.inputRef.$refs.inputRef.focus();
  },
  methods: {
    editNumber: function (input, index) {
      this.numbers.splice(index, 1, input);
    },
    resetWindow: function () {
      Object.assign(this.$data, initialState());
    },
    addNumber: function () {
      this.numbers.push({ number: "", type: "" });
    },
    removeNumber: function (index) {
      this.numbers.splice(index, 1);
    },
    onClose: function () {
      this.$emit("onClose");
      this.resetWindow();
    },
    onSubmit: function () {
      let numbers = JSON.parse(JSON.stringify(this.numbers));
      addContact({ name: this.name, numbers: [...numbers] });
      this.onClose();
    },
  },
};

const initialState = () => ({
  name: "",
  numbers: [{ number: "", type: "" }],
});
</script>

<style scoped>
.add-button {
  margin-top: 25px;
}
.modal-style {
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
}
.button-row {
  margin-top: 30px;
  text-align: right;
}
.close-button {
  margin-right: 10px;
  background-color: white;
  color: black;
}
.input-field {
  padding: 10px;
}
.divider {
  width: 85%;
  opacity: 40%;
}
</style>
