import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={'Loading...'}>
      <App />
    </Suspense>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
