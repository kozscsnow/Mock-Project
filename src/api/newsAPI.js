import axiosClient from './axiosClient';

const urlParam = `everything?q=google&from=2021-07-01&to=2021-07-01&sortBy=popularity&apiKey=aaf3d9874b944c16baf8f6dee354ad06`;
const newsAPI = {
  getAll(params) {
    const url = `/${urlParam}`;
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/${urlParam}/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/${urlParam}`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/${urlParam}/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/${urlParam}/${id}`;
    return axiosClient.delete(url);
  },
};

export default newsAPI;
