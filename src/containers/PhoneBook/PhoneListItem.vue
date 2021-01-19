<template>
  <Card>
    <div class="container">
      <span class="contact-info">
        <SvgIcon name="accountCircle"></SvgIcon>
        <span class="contact-name">{{ name }}</span>
      </span>
      <Button :onClick="onRemove" class="delete-button"
        ><SvgIcon class="delete-icon" name="clear"></SvgIcon
      ></Button>
    </div>
    <transition name="expand">
      <div v-if="showDetails" class="number-list">
        <div v-for="number in numbers" :key="number.number" class="numbers">
          <span class="number-type">{{ number.type }}:</span>
          <span>{{ number.number }}</span>
        </div>
      </div>
    </transition>
    <div v-on:click="showContactDetails" class="expand-button">
      <SvgIcon v-if="showDetails" name="upArrow"></SvgIcon>
      <SvgIcon v-if="!showDetails" name="downArrow"></SvgIcon>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/Card';
import SvgIcon from '@/components/SvgIcon';
import Button from '@/components/Button';

export default {
  name: 'PhoneListItem',
  components: {
    Card,
    SvgIcon,
    Button,
  },
  props: {
    name: String,
    numbers: Array,
    index: Number,
  },
  data: function () {
    return {
      showDetails: false,
      rotate: 0.5,
    };
  },
  methods: {
    onRemove() {
      this.$emit('clicked', this.index);
    },
    showContactDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.contact-info {
  display: flex;
  align-items: center;
  padding: 5px;
}
.contact-name {
  padding-left: 10px;
}
.expand-button {
  padding-top: 10px;
  cursor: pointer;
}
.delete-button {
  fill: rgb(255, 48, 48);
  background-color: white;
  padding: 4px 2px 2px;
}
.delete-icon {
  height: 5px;
}
.delete-button:focus {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: 0;
  outline: 0px;
}
.numbers {
  margin-top: 8px;
  padding: 7px;
  border: 1px solid rgb(138, 138, 138);
  border-radius: 8px;
}
.number-type {
  margin-right: 5px;
}
.number-list {
  text-align: left;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 10px;
}
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s;
  max-height: 230px;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
