import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";

export class App extends Component { 
  state = {
    contacts: [],
    filter: ''
  }
  
  onInputChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  }
  onSubmitContact = contact => {
    const { contacts } = this.state;
    const newContact = {...contact, id: nanoid()}
    this.setState({
      contacts: [...contacts, newContact],
      name: "",
      number: "",
    });
  }
  deleteContact = contactID => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== contactID) });
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmitContact={this.onSubmitContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onInputChangeFilter={this.onInputChangeFilter}></Filter>
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact}></ContactList>
      </div>
    );
}
}
