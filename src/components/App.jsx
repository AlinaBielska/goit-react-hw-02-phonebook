import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';


export class App extends Component { 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  
  onInputChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  }
  onSubmitContact = contact => {
    const { contacts } = this.state;
    const { name, number } = this.props;
    this.setState({
      contacts: [...contacts, { name, number }],
      name: "",
      number: "",
    });
  }

  render() {
    const { contacts, filter } = this.state;
    const idFilter = nanoid();
    const onInputChangeFilter = this.onInputChangeFilter;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmitContact={this.onSubmitContact}></ContactForm>
        <h2>Contacts</h2>
        <label htmlFor={idFilter}>Find contacts by name</label>
        <input
          id={idFilter}
          type="text"
          name="find"
          value={filter}
          onChange={onInputChangeFilter}
          title="Find contacts by name"
        />
        <ul>
          {contacts
            .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map(contact => {
            return (
              <li key={nanoid()}>{contact.name}: {contact.number}</li>
            )
          })}
        </ul>
      </div>
    );
}
}
