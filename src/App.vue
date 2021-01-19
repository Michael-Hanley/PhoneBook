<template>
  <div id="app">
    <PhoneBook :msg="title" />
  </div>
</template>

<script>
import PhoneBook from "@/containers/PhoneBook";
import strings from "@/assets/strings";

export default {
  name: "App",
  components: {
    PhoneBook
  },
  data: function () {
    return {
      title: strings.title,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
