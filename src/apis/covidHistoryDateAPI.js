import { axiosClientCovid } from './axiosClient';

const urlParam = 'historical';
const covidHistoryDateAPI = {
  getAll(params) {
    const url = `/${urlParam}`;
    return axiosClientCovid.get(url, { params });
  },
  get(country, params) {
    const url = `/${urlParam}/${country}`;
    return axiosClientCovid.get(url, { params });
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

export default covidHistoryDateAPI;
