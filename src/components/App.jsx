import React, { Component } from "react";


export class App extends Component { 
  state = {
    contacts: [],
    name: ''
  }

  submitContact = evt => {
    this.setState({ name: evt.target.value });
  }

  render() {
    const { contacts } = this.state;
    const name = this.state;
    const submitContact = this.submitContact;

  return (
    <div>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </label>
        <button type="submit" onSubmit={submitContact}>Add contact</button>
      </form>
      <ul>Contacts</ul>
    </div>
  );
}
}
