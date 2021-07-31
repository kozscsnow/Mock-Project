import { Spin } from 'antd';
import 'antd/dist/antd.css';
import GlobalLoading from 'components/GlobalLoading';
import LoadingSpin from 'components/LoadingSpin';
import { createBrowserHistory } from 'history';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    detection: {
      order: ['cookie', 'htmlTag', 'path', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

const history = createBrowserHistory();

ReactDOM.render(
  <Suspense fallback={<LoadingSpin height={'100vh'} />}>
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
