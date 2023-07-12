import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('submit');
    // const contactsData = {
    //   ...this.state,
    //   number: Number(this.state.number),
    // };
    // console.log(contactsData);
    this.props.addContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  AddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
