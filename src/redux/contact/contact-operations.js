import axios from "axios;";
import { addContactsRequest, addContactsSuccess, addContactsError } from './contact-actions';

axios.defaults.baseUrl = "http://localhost:3000";

const addContacts = (name, number) => (dispatch) => {
  const contacts = { name, number };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

export default {
    addContacts,
}