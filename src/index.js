import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'; //redux bindings for react
import thunk from 'redux-thunk'; //middleware that allows us to use promises in actions (async actions)
import { createStore, applyMiddleware, compose } from 'redux'; //allows us to create the store and middleware

import reducers from './reducers/index.js';
const middleware = [thunk];
const store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
