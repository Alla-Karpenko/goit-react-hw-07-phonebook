import axios from 'axios';
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
} from "./contact-actions";

axios.defaults.baseURL = "http://localhost:4000";

const addContacts = (name, number) => async dispatch => {
  const contacts = { name, number };

  dispatch(addContactsRequest());

    try {
        const { data } = await axios.post("/contacts", contacts);
        dispatch(addContactsSuccess(data));
    } catch (error) {
       dispatch(addContactsError(error.message)); 
    }
    
//   axios
//     .post("/contacts", contacts)
//     .then(({ data }) => dispatch(addContactsSuccess(data)))
//     .catch((error) => dispatch(addContactsError(error.message)));
};

const deleteContact = contactsId => dispatch => {
    dispatch(deleteContactsRequest());

    axios
      .delete(`/contacts/${contactsId}`)
      .then(() => dispatch(deleteContactsSuccess(contactsId)))
      .catch((error) => deleteContactsError(error));
}

export default {
  addContacts,
  deleteContact,
}; 