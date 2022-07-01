import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main/Main';
import 'semantic-ui-css/semantic.min.css';
import React, {StrictMode, useState} from 'react';



import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Provider store = {store}>
      <Main />
    </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
