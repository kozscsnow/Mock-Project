import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storeAccount: [],
};

const formRegisterSlice = createSlice({
  name: 'formRegisterSlice',
  initialState,
  reducers: {
    getRegisterAccount(state, action) {
      state.storeAccount.push(action.payload);
    },
  },
});

const { actions, reducer } = formRegisterSlice;
export { actions as FormRegisterActions, reducer as FormRegisterReducer };
