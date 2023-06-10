import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';

export default function ContactsList() {
    const contacts = useSelector(state => state.contacts);
    const currentFilter = useSelector(state => state.filter);
    
    const visibleContacts = (contacts, currentFilter) => {
         contacts.filter(contact => contact.toLowerCase().trim().includes(currentFilter));
    }
  
    return (<ul>
            { visibleContacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    )
}
