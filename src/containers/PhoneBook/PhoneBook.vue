<template>
  <div class="phone-book">
    <h1>{{ msg }}</h1>
    <PhoneList />
  </div>
</template>

<script>
import PhoneList from "./PhoneList";

export default {
  name: "PhoneBook",
  components: {
    PhoneList,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phone-book {
  max-width: 600px;
}
</style>
