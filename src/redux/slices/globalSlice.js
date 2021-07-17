import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isLocalLoading: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsLocalLoading(state, action) {
      state.isLocalLoading = action.payload;
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
