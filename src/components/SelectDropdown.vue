<template>
  <div>
    <div>
      <label for="select"><slot></slot></label>
    </div>
    <select
      id="select"
      class="select"
      @change="this.onChange"
      v-model="localValue"
    >
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectDropdown",
  props: {
    options: Array,
    value: String,
  },
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
  methods: {
    onChange: function () {
      console.log(this.localValue);
      this.$emit("input", this.localValue);
    },
  },
};
</script>

<style scoped>
.select {
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: none;
  font-size: inherit;
  text-align: left;
  outline: none;
  border-bottom: 1px solid gray;
  cursor: pointer;
}
.select:focus {
  margin-bottom: 4px;
  border-bottom: 2px solid black;
}
</style>
