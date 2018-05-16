export interface AppState {
  counter: number;
}

export function counterReducer(counter: number, action): number {
  console.log("Reducer", counter, action);

  if(action.type == "INC") {
    return counter + 1;
  }
  else if(action.type == "DEC") {
    return counter - 1;
  }
  else {
    return counter;
  }
}
