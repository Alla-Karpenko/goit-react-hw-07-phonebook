import axios from 'axios';
import {addContactsError, addContactsRequest, addContactsSuccess} from './contact-actions';

axios.defaults.baseUrl = "http://localhost:3000";

const addContacts = (name, number) => dispatch => {
  const contacts = { name, number };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

export default {
    addContacts,
} 