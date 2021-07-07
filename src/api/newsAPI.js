import axiosClient from './axiosClient';

const newsAPI = {
  getAll(params) {
    const url = `/news`;
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/news/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/news`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/news/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
};

export default newsAPI;
