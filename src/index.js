import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalLoading from './components/GlobalLoading';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   vi: {
    //     translation: {
    //       'Welcome to React': 'Xin chào',
    //     },
    //   },
    //   en: {
    //     translation: {
    //       'Welcome to React': 'Welcome to React and react-i18next',
    //     },
    //   },
    // },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'vi'],
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalLoading>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </GlobalLoading>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
