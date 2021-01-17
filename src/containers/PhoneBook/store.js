import Vue from 'vue';

export const store = Vue.observable({
  contacts: [
    {
      name: "test-name1",
      numbers: [{ number: "123-456-7890", type: "Home" }],
    },
    {
      name: "test-name2",
      numbers: [{ number: "123-456-7892", type: "Mobile" }],
    },
    {
      name: "test-name3",
      numbers: [{ number: "123-456-7893", type: "Home" }],
    },
    {
      name: "test-name4",
      numbers: [{ number: "123-456-7894", type: "Home" }],
    },
  ],
})

export const removeContact = (index) => {
  store.contacts.splice(index, 1);
}

export const addContact = (contact) => {
  store.contacts.push(contact)
}