import { combineReducers } from 'redux';
//importamos redux-form
import { reducer as formReducer } from 'redux-form';
//importamos nuestro authReducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
