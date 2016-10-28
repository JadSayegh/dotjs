import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import appReducers from './AppReducers'


let store = createStore(appReducers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);