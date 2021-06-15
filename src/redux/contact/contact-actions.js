import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');





