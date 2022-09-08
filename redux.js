const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 25
}

//TODO REDUCER
const rootReducer = (state = initialState, action) => {
    return state;
}

//TODO STORE
const store = createStore(rootReducer);
console.log(store.getState());

//TODO DISPATCHING ACTION

//TODO SUBSCRIPTION