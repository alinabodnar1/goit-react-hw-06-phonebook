import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
 
const contactsInitialState = initialState.contacts;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name,number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
//     editContact = (state, action) => {
//     setContacts((prevContacts) => prevContacts.map((item) => {
//       if (item.id === contact.id) {
//         return contact;
//       }
//       return item;
//     }))
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
