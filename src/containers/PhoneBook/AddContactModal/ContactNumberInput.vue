<template>
  <div class="input-container">
    <InputField
      class="input-field input-type"
      label="Type"
      inputId="numberType"
      :value="number.type"
      @input="(e) => onInput({ ...this.number, type: e })"
      placeholder="Number Type"
    />
    <InputField
      class="input-field input-number"
      label="Phone Number"
      inputId="numberInput"
      :value="number.number"
      :normalize="this.normalize"
      @input="(e) => onInput({ ...this.number, number: this.normalize(e) })"
      placeholder="###-###-####"
    />
    <Button v-if="index !== 0" class="remove-button" :onClick="removeNumber"
      ><SvgIcon name="trash"></SvgIcon
    ></Button>
  </div>
</template>

<script>
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import SvgIcon from "@/components/SvgIcon";
import { normalizePhone } from "@/utils/normalize";

export default {
  name: "ContactNumberInput",
  components: {
    InputField,
    Button,
    SvgIcon,
  },
  props: {
    index: Number,
  },
  data: function () {
    return {
      number: { number: "", type: "" },
    };
  },
  methods: {
    onInput: function (e) {
      this.number = { ...e };
      this.$emit("input", { ...e }, this.index);
    },
    normalize: function (e) {
      return normalizePhone(e);
    },
    removeNumber: function () {
      this.$emit("removeNumber", this.index);
    },
  },
};
</script>

<style scoped>
.input-field {
  padding: 10px;
}
.input-container {
  display: flex;
}
.input-type {
  flex: 1;
}
.input-number {
  flex: 2;
}
.remove-button {
  background-color: white;
  padding: 0;
  padding-top: 4px;
  margin-top: 16px;
  align-self: center;
}
</style>



