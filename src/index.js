import { Spin } from 'antd';
import 'antd/dist/antd.css';
import GlobalLoading from 'components/GlobalLoading';
import { createBrowserHistory } from 'history';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
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

const StyleSpin = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

ReactDOM.render(
  <Suspense fallback={<StyleSpin />}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
