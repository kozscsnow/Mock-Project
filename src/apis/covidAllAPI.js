import { axiosClientCovid } from './axiosClient';

const urlParam = 'all';
const covidAllAPI = {
  getAll(params) {
    const url = `/${urlParam}`;
    return axiosClientCovid.get(url, { params });
  },
  get(id) {
    const url = `/${urlParam}/${id}`;
    return axiosClientCovid.get(url);
  },
  add(data) {
    const url = `/${urlParam}`;
    return axiosClientCovid.post(url, data);
  },
  update(data) {
    const url = `/${urlParam}/${data.id}`;
    return axiosClientCovid.patch(url, data);
  },
  remove(id) {
    const url = `/${urlParam}/${id}`;
    return axiosClientCovid.delete(url);
  },
};

export default covidAllAPI;
