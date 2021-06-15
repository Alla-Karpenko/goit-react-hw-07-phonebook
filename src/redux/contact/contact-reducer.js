import { createReducer} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactsSuccess,
  deleteContactsSuccess,
  changeFilter,
} from "./contact-actions";

const items = createReducer([], {
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('',{
    [changeFilter]: (_, { payload }) => payload,
}) 

export default combineReducers({
    items,
    filter,
}) 



