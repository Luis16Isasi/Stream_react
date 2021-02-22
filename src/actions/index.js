import axios from '../api/axios';

export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId,
  };
};

export const signOut = userId => {
  return {
    type: 'SIGN_OUT',
    payload: userId,
  };
};

//el segundo parametro luego del distpach, es el store de Redux
//de ahí podemos obtener algun state del store
export const createStream = formValues => async (dispatch, getState) => {
  let { userid } = getState().auth;

  let response = await axios.post('/streams', { ...formValues, userid });

  dispatch({ type: 'CREATE_STREAM', payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  let response = await axios.get('/streams');
  dispatch({ type: 'FETCH_STREAMS', payload: response.data });
};

export const fecthStream = id => async dispatch => {
  let response = await axios.get(`/streams/${id}`);

  dispatch({ type: 'FETCH_STREAM', payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  let response = await axios.patch(`/streams/${id}`, formValues);

  dispatch({ type: 'EDIT_STREAM', payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`/streams/${id}`);

  dispatch({ type: 'EDIT_STREAM', payload: id });
};
