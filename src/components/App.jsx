import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contactsData => {
    const newNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === contactsData.name
    );

    if (newNameExists) {
      alert(`${contactsData.name} is already in contacts`);
    } else {
      const newContact = {
        ...contactsData,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({
      filter: filter,
    });
  };

  getFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const strContacts = localStorage.getItem('contacts');
    const contactsLocalStorage = JSON.parse(strContacts) || [];
    this.setState({ contacts: contactsLocalStorage });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const stringifidContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifidContacts);
    }
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Heading>Phonebook</Heading>
        <ContactForm addContact={this.addContact} />
        <Heading>Contacts</Heading>
        {filteredContacts.length > 1 && (
          <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        )}
        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}
