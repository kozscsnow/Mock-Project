import axios from 'axios';

// --------------Axios Client Covid----------------
const axiosClientCovid = axios.create({
  baseURL: 'https://disease.sh/v3/covid-19/',
  header: {
    'Content-type': 'application/json',
  },
});

// Add a request interceptor
axiosClientCovid.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClientCovid.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// --------------Axios Client News----------------
const axiosClientNews = axios.create({
  // baseURL: 'https://newsapi.org/v2/',
  baseURL: 'http://localhost:3000',
  header: {
    'Content-type': 'application/json',
  },
});

// Add a request interceptor
axiosClientNews.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClientNews.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // return response.data.articles;
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { axiosClientNews, axiosClientCovid };
