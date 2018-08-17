import { combineReducers } from 'redux';
import { ContactReducer } from './ContactReducer';

const reducers = combineReducers({
  contacts: ContactReducer
});

export default reducers;
