import {createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface AppState {
  counter: number;
}

function reducer(state, action) {
  if(action.type == "INC") {
    return inc(state);
  }
  else if(action.type == "DEC") {
    return dec(state);
  }

  return state;
}

function inc(state) {
  return {
    ... state,
    counter: state.counter + 1,
  }
}

function dec(state) {
  return {
    ... state,
    counter: state.counter - 1,
  }
}

export const appStore: Store<AppState> = createStore(reducer, {
  counter: 0,
}, applyMiddleware(thunk));

console.log("state", appStore.getState());

// appStore.dispatch({
//   type: "INC",
// });
//
// console.log("state", appStore.getState());
