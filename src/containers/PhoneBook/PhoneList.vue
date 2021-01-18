<template>
  <div ref="listRef">
    <div class="add-contact" v-if="contacts.length">
      <Button :onClick="showModal" class="add-button">Add Contact +</Button>
    </div>
    <PhoneListItem
      v-for="(contact, index) in contacts"
      v-bind:key="index"
      v-bind:numbers="contact.numbers"
      v-bind:name="contact.name"
      v-bind:index="index"
      @clicked="removeNumber"
    ></PhoneListItem>
    <div v-if="!contacts.length">
      <h2>Start by Adding a Contact</h2>
      <Button :onClick="showModal" class="add-icon-button"
        ><SvgIcon name="addContact"></SvgIcon
      ></Button>
    </div>
    <AddContactModal
      v-if="isModalVisible"
      v-on:onClose="showModal"
      v-bind:isModalVisible="isModalVisible"
    />
  </div>
</template>

<script>
import PhoneListItem from "./PhoneListItem";
import AddContactModal from "./AddContactModal";
import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import alert from "@/utils/alert";
import { store, removeContact } from "./store";

export default {
  name: "PhoneList",
  components: {
    PhoneListItem,
    AddContactModal,
    Button,
    SvgIcon,
  },
  data: function () {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    contacts() {
      return store.contacts;
    },
  },
  methods: {
    removeNumber: function (index) {
      alert(
        this.$refs.listRef,
        "Are you sure you want to delete this contact?",
        () => removeContact(index)
      );
    },
    showModal: function () {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>

<style scoped>
.add-contact {
  text-align: left;
  margin-bottom: 10px;
}
.add-icon-button {
  background-color: white;
  padding: 10px 40px;
  margin-top: 20px;
  border: 1px solid black;
}
</style>
