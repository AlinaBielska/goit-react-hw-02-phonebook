import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
    return (
        <>
            <li>{name}: {number}</li>
            <button
                type="button"
                onClick={() => deleteContact(id)}>
                X
            </button>
        </>
    );
}

export default ContactListItem