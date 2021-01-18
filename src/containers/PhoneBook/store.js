import Vue from 'vue';

export const store = Vue.observable({
  contacts: [],
})

export const removeContact = (index) => {
  store.contacts.splice(index, 1);
}

export const addContact = (contact) => {
  store.contacts.push(contact)
}