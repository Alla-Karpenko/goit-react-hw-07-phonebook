import { createReducer} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContact,
  changeFilter,
} from "./contact-actions";

const items = createReducer([], {
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('',{
    [changeFilter]: (_, { payload }) => payload,
}) 

// const loading = createReducer(false, {
//   [addContactsRequest]: () => true,
//   [addContactsSuccess]: () => false,
//   [addContactsError]: () => false,
// });

export default combineReducers({
    items,
    filter,
    // loading,
}) 



