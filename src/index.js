import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import { store } from './redux/store';

import './index.css';
import { SENTRY_DNS, REACT_APP_ENVIRONMENT } from './contants';

Sentry.init({
  dsn: SENTRY_DNS,
  environment: REACT_APP_ENVIRONMENT,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
