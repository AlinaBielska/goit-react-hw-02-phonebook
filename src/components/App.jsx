import React, { Component } from "react";


export class App extends Component { 
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  onInputChangeName = evt => {
    this.setState({ name: evt.target.value });
  }
  onInputChangeNumber = evt => {
    this.setState({ number: evt.target.value });
  }
  onSubmitContact = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    this.setState({ contacts: [...contacts, { name, number }] });
  }

  render() {
    const { contacts } = this.state;
    const { name } = this.state;
    const { number } = this.state;
    const onInputChangeName = this.onInputChangeName;
    const onInputChangeNumber = this.onInputChangeNumber;
    const onSubmitContact = this.onSubmitContact;

    return (
      <div>
        <form onSubmit={onSubmitContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInputChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={onInputChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>Contacts
          {contacts.map(contact => {
            return (
              <li>{contact.name}: {contact.number}</li>
            )
          })}
        </ul>
      </div>
    );
}
}
