import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({name, number}) => {
    return (
        <li>{name}: {number}</li>
    );
}

export default ContactListItem