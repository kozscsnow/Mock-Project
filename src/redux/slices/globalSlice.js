import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isLoggedIn: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },

    resetStoreRedux(state, action) {
      return initialState;
    },
  },
});

const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };
