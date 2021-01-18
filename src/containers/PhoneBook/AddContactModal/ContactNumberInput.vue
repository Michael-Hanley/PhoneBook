<template>
  <div class="input-container">
    <div class="input-type">
      <SelectDropdown
        :options="this.typeOptions"
        :value="this.typeOptions[0]"
        v-model="number.type"
        >Type</SelectDropdown
      >
    </div>
    <InputField
      class="input-field input-number"
      autocomplete="off"
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
import SelectDropdown from "@/components/SelectDropdown";
import { normalizePhone } from "@/utils/normalize";

export default {
  name: "ContactNumberInput",
  components: {
    InputField,
    Button,
    SvgIcon,
    SelectDropdown,
  },
  props: {
    index: Number,
  },
  data: function () {
    return {
      number: { number: "", type: "Mobile" },
      typeOptions: ["Mobile", "Home", "Fax", "Other"],
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
  padding: 10px;
  text-align: left;
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



