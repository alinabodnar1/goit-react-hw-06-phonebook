import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  
  return (
      <div style={{marginLeft: "20px"}}>
        <h1>Phonebook</h1>
        <Form />
       
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        <ToastContainer autoClose ={3000} />
      </div>
    );
  }


