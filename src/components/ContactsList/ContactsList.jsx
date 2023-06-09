import React from 'react';
// import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { useSelector } from 'react-redux';

export default function ContactsList() {
    const contacts = useSelector(state => state.contacts);
    const currentFilter = useSelector(state => state.filter);
    const visibleContacts = contacts.filter(contact => contact.toLowerCase().trim().includes(currentFilter));

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
// ContactsList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onEdit: PropTypes.func.isRequired,
// }