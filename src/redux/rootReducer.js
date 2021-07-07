import { combineReducers } from 'redux';
import { GlobalReducer } from './slices/globalSlice';
import { FormRegisterReducer } from './slices/formRegisterSlice';

const rootReducer = combineReducers({
  GlobalReducer,
  FormRegisterReducer,
});

export default rootReducer;
