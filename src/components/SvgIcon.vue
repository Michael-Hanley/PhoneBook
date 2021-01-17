<template>
  <svg :style="styles">
    <path :d="path" />
  </svg>
</template>

<script>
import icons from "@/assets/icons.json";

export default {
  name: "AppIcon",
  props: {
    name: String,
    styles: {
      type:String,
      default: "width: 24px; height: 24px"
    },
  },
  computed: {
    path() {
      return icons[this.name];
    }
  },
};
</script>