<template>
  <Modal @onClose="onClose">
    <form @submit.prevent="onSubmit">
      <div class="modal-style">
        {{ addNewContact }}
        <div>
          <InputField
            required
            ref="inputRef"
            class="input-field"
            autocomplete="off"
            inputId="nameInput"
            v-model="name"
            :label="nameLabel"
            :placeholder="contactName"
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
          <Button type="button" :onClick="addNumber" class="add-button">
            {{ addAnotherNumber }}
          </Button>
        </div>
        <div class="button-row">
          <div class="error-text">
            <span>{{ error }}</span>
          </div>
          <div>
            <Button type="button" :onClick="onClose" class="close-button">
              {{ close }}</Button
            >
            <Button type="submit">{{ submit }}</Button>
          </div>
        </div>
      </div>
    </form>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import strings from "@/assets/strings";
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

      this.error = this.validatePhoneNums(numbers);

      if (this.error) return;

      addContact({ name: this.name, numbers: [...numbers] });
      this.onClose();
    },
    validatePhoneNums: function (numbers) {
      if (!numbers.every((num) => num.number.length === 12)) {
        return "Number Must be 10 Digits";
      }
    },
  },
};

const initialState = () => ({
  name: "",
  error: "",
  numbers: [{ number: "", type: "" }],
  addAnotherNumber: strings.addAnotherNumber,
  addNewContact: strings.addNewContact,
  contactName: strings.contactName,
  nameLabel: strings.name,
  submit: strings.submit,
  close: strings.close,
});
</script>

<style scoped>
.add-button {
  margin-top: 25px;
}
.modal-style {
  max-width: 400px;
  padding: 20px;
}
.error-text {
  color: red;
  word-wrap: none;
  text-align: left;
  align-self: center;
}
.button-row {
  margin-top: 30px;
  text-align: right;
  display: flex;
  justify-content: space-between;
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
