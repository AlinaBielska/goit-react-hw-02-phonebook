import React, { Component } from "react";


export class App extends Component { 
  state = {
    contacts: [],
    name: ''
  }

  onInputChange = evt => {
    this.setState({ name: evt.target.value });
  }
  onSubmitContact = evt => {
    evt.preventDefault();
    const { name, contacts } = this.state;
    this.setState({ contacts: [...contacts, name] });
  }

  render() {
    const { contacts } = this.state;
    const name = this.state;
    const onInputChange = this.onInputChange;
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
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <ul>Contacts</ul>
    </div>
  );
}
}
