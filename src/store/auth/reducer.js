import types from './types';

const initialState = {
  uid: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        uid: action.payload.uid,
      };
    case types.LOGOUT:
      return {
        ...state,
        uid: '',
      };
    default:
      return state;
  }
}
