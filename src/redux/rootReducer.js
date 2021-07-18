import { combineReducers } from 'redux';
import { GlobalReducer } from './slices/globalSlice';
import { FormRegisterReducer } from './slices/formRegisterSlice';
import { CovidInfoReducer } from './slices/covidInfoSlice';

const rootReducer = combineReducers({
  GlobalReducer,
  FormRegisterReducer,
  CovidInfoReducer,
});

export default rootReducer;
