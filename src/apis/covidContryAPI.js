import { axiosClientCovid } from './axiosClient';

const covidContryAPI = {
  getAll(country, params) {
    const url = `/countries/${country}`;
    return axiosClientCovid.get(url, { params });
  },
  get(id) {
    const url = `/countries/${id}`;
    return axiosClientCovid.get(url);
  },
  add(data) {
    const url = `/countries`;
    return axiosClientCovid.post(url, data);
  },
  update(data) {
    const url = `/countries/${data.id}`;
    return axiosClientCovid.patch(url, data);
  },
  remove(id) {
    const url = `/countries/${id}`;
    return axiosClientCovid.delete(url);
  },
};

export default covidContryAPI;
