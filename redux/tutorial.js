// Redux Tutorial
const reducer = (state = 5) => {
  return state;
}

let store = Redux.createStore(reducer);

const store = Redux.createStore(
  (state = 5) => state
);

let currentState = store.getState();
