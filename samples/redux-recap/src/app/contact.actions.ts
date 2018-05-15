import {delay} from './common/timer.helpers';
import {Contact} from '../app.state';

export function reload() {
  return async function(dispatch) {
    console.log("reload BEGIN");

    await delay(1000);

    const contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    dispatch(setContacts(contacts));

    console.log("reload END");
  }
}

export function setContacts(contacts: Contact[]) {
  return {
    type: "SET_CONTACTS",
    contacts,
  }
}
