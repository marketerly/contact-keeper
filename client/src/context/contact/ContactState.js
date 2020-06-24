import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Jdia',
                email: 'Jill@google.com',
                phone: '111-111-3323',
                type: 'personal',
            },
            {
                id: 2,
                name: 'Dogo Mogo',
                email: 'DogoMogo@google.com',
                phone: '111-238-9823',
                type: 'professional',
            },
            {
                id: 3,
                name: 'Sara Ali',
                email: 'sara.all@google.com',
                phone: '111-111-3323',
                type: 'personal',
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    /**
	Between useReducer and Component "return" statement, we include all
	the functionality we want that's related to the resource. i.e Contact
	 **/

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
            }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
