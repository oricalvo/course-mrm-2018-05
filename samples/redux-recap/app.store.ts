import {createStore, applyMiddleware} from 'redux';
import {AppState, Contact} from './src/app.state';
import thunk from 'redux-thunk';

function reducer(state: AppState, action): AppState {
  if(action.type == "SET_CONTACTS") {
    return {
      ... state,
      contacts: action.contacts,
    }
  }

  return state;
}

export const appStore = createStore(reducer, {
  contacts: null,
}, applyMiddleware(thunk));
