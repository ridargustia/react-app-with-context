import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import BlogPost from './container/BlogPost/BlogPost';
import Home from './container/Home/Home';
// import BlogPost from './container/BlogPost/BlogPost';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

//TODO Inisial state
const initState = {
  totalOrder: 3
}

//TODO create reducer
const rootReducer = (state = initState, action) => {
  return state;
}

//TODO Create Store
const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux} ><Home /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
