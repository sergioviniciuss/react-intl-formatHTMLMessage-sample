import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeDataEN from 'react-intl/locale-data/en';
import './index.css';
import App from './App';


const messages = require('./assets/en.json')

addLocaleData([
  ...localeDataEN,
]);
ReactDOM.render(
  <IntlProvider
    locale="en"
    messages={messages}
  >
    <App />
  </IntlProvider>

, document.getElementById('root'));
