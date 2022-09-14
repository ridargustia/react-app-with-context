const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 25
}

//TODO REDUCER
const rootReducer = (state = initialState, action) => {
    // console.log(action);
    // if(action.type === 'ADD_AGE'){
    //     return {
    //         ...state,
    //         age: state.age + 1,
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE'){
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // return state;
    //TODO Agar lebih rapi menggunakan switch
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1,
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

//TODO STORE
const store = createStore(rootReducer);
console.log(store.getState());

//TODO SUBSCRIPTION
store.subscribe(() => {
    console.log('Store change:', store.getState());
});

//TODO DISPATCHING ACTION
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 10});
console.log(store.getState());
