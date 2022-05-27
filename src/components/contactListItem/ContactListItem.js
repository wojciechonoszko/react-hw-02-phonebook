import React from 'react';
import {ButtonContainer} from '../contactForm/ContactFormStyles';
import {ContactListItemContainer} from './ContactListItemStyles';
import PropTypes from 'prop-types';

const ContactListItem = ({name, number, deleteContact}) => {
    return(
        <ContactListItemContainer>
            <p className="contactListItemText">
                {name}: {number}
            </p>
            <ButtonContainer type="button" onClick={deleteContact}>
            Delete
            </ButtonContainer>
        </ContactListItemContainer>
    );
};

ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
};

export default ContactListItem;