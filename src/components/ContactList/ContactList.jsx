import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import ContactListItem from "components/ContactListItem/ContactListItem";

class ContactList extends Component {
    render() {
        const { contacts, filter, deleteContact } = this.props;

        return (
            <ul>
                {contacts
                    .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(contact => {
                        const key = nanoid();
                        return (
                            <ContactListItem
                                key={key}
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                                deleteContact={deleteContact}
                            />
                        )
                    })}
            </ul>
        );
    }
}

export default ContactList