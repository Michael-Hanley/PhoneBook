<template>
  <div>
    <div class="custom-input-label">
      <label :for="inputId" v-if="label">{{ label }}</label>
    </div>
    <input
      ref="inputRef"
      :id="inputId"
      :autocomplete="autocomplete"
      class="custom-input-field"
      v-model="localValue"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: ["value", "label", "inputId", "placeholder", 'autocomplete'],
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue: function () {
      this.localValue = this.value;
    },
  },
};
</script>

<style scoped>
.custom-input-field {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: none;
  font-size: inherit;
  outline: none;
  border-bottom: 1px solid gray;
}
.custom-input-field:focus {
  margin-bottom: 4px;
  border-bottom: 2px solid black;
}
.custom-input-label {
  margin-right: 10px;
  text-align: left;
}
</style>



