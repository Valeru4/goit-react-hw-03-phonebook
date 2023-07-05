import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes, { arrayOf } from 'prop-types';

export const ContactList = ({ contacts, removeContact }) => {
  const handleRemoveContact = id => {
    removeContact(id);
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          <p>{contact.name}</p>
          <button onClick={() => handleRemoveContact(contact.id)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
