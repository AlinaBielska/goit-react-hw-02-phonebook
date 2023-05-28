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
};

ContactListItem.propTypes = {
    key: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem