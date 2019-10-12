// Redux Tutorial
const reducer = (state = 5) => {
  return state;
}

let store = Redux.createStore(reducer);

const store = Redux.createStore(
  (state = 5) => state
);

let currentState = store.getState();
let action={
  type: 'LOGIN'
}

const action = {
  type: 'LOGIN'
}
function actionCreator(){
    return action;
}
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
