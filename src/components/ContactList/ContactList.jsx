import React from 'react';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          <p>{contact.name}</p>
        </li>
      ))}
    </ul>
  );
};
