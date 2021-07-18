import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoCovidAll: [],
  infoCovidHistory: {},
  listInfoCovidCountries: [],
};

const covidInfoSlice = createSlice({
  name: 'formRegisterSlice',
  initialState,
  reducers: {
    getInfoCovidAll(state, action) {
      state.infoCovidAll = action.payload;
    },
    getListInfoCovidCountries(state, action) {
      state.listInfoCovidCountries = action.payload;
    },
  },
});

const { actions, reducer } = covidInfoSlice;
export { actions as CovidInfoActions, reducer as CovidInfoReducer };
