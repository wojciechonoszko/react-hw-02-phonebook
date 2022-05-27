import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../components/contactListItem/ContactListItem';

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={uuid()}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default ContactList;