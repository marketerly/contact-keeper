import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
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
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    /**
	Between useReducer and Component "return" statement, we include all
	the functionality we want that's related to the resource. i.e Contact
	 **/

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set Current Contact
    const setCurrent = contact =>
        dispatch({ type: SET_CURRENT, payload: contact });

    // Clear Current Contact
    const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => dispatch({ type: CLEAR_FILTER });

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
            }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
