import axios from 'axios';
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { googleAuthProvider } from '../../../firebase-config';
import api from '../../profile/services/api';
import { fetchCurrentUser, showCurrentUserSuccess } from './reducers';
let password = require('secure-random-password');
password = password.randomString();

export const AUTH_INFO_SUCCESS = 'app/auth/AUTH_INFO_SUCCESS';

export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'app/auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/auth/LOGIN_ERROR';

export const SIGNUP_REQUEST = 'app/auth/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'app/auth/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'app/auth/SIGNUP_ERROR';

export const LOGOUT_REQUEST = 'app/auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'app/auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'app/auth/LOGOUT_ERROR';

export const GOOGLE_LOGIN_REQUEST = 'app/auth/GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'app/auth/GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_ERROR = 'app/auth/GOOGLE_LOGIN_ERROR';

const initialState = {
  isAuthenticated: false,

  loginError: null,
  loginInProgress: false,

  logoutError: null,
  logoutInProgress: false,

  signupError: null,
  signupInProgress: false,
};

export default function authReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_INFO_SUCCESS:
      return {
        ...state,
        isAuthenticated: !!payload,
      };

    case LOGIN_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
      return { ...state, loginError: null, loginInProgress: true };
    case LOGIN_SUCCESS:
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, loginInProgress: false };
    case LOGIN_ERROR:
    case GOOGLE_LOGIN_ERROR:
      return { ...state, loginError: payload, loginInProgress: false };

    case SIGNUP_REQUEST:
      return { ...state, signupError: null, signupInProgress: true };
    case SIGNUP_SUCCESS:
      return { ...state, isAuthenticated: true, signupInProgress: false };
    case SIGNUP_ERROR:
      return { ...state, signupError: payload, signupInProgress: false };

    case LOGOUT_REQUEST:
      return { ...state, logoutError: null, logoutInProgress: true };
    case LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, logoutInProgress: false };
    case LOGOUT_ERROR:
      return { ...state, logoutError: payload, logoutInProgress: false };

    default:
      return state;
  }
}

export const authInfoSuccess = (user) => ({ payload: user, type: AUTH_INFO_SUCCESS });

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginError = (e) => ({ payload: e, type: LOGIN_ERROR });

export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupError = (e) => ({ payload: e, type: SIGNUP_ERROR });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = (e) => ({ payload: e, type: LOGOUT_ERROR });

export const googleLoginRequest = () => ({ type: GOOGLE_LOGIN_REQUEST });
export const googleLoginSuccess = () => ({ type: GOOGLE_LOGIN_SUCCESS });
export const googleLoginError = (e) => ({ payload: e, type: GOOGLE_LOGIN_ERROR });

export const login = (values) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await axios
      .post('http://localhost:3005/users/login', {dni: values.document, tipoDoc: values.documentType, password: values.password});
      if(user.data.error) return dispatch(loginError(user.data.error))
      dispatch(loginSuccess());
      return dispatch(fetchCurrentUser(user.data))
  } catch (e) {
    return dispatch(loginError(e));
  }
};

export const signup = (params) => (dispatch, getState, firebase) => {
  const { email, firstName, lastName } = params.values;
  const access_token = params.accessToken;
  const auth = getAuth();
  let values = params.values;

  dispatch(signupRequest());
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      return (values = {
        ...values,
        externalId: res.user.uid,
      });
    })
    .then(() =>
      api
        .user()
        .create(values, access_token)
        .then((res) => {
          dispatch({ payload: res.data, type: "USER_CREATE" });
          // onSuccess();
        })
        .catch((err) => {
          if (err.request) {
            console.log(err.request);
          }
          if (err.response) {
            console.log(err.response);
          }
        })
    )
    .then(() => dispatch(signupSuccess()))
    .then(() => (password = null))
    .catch((e) => {
      dispatch(signupError(e));
      throw e;
    });
};

export const logout = () => (dispatch, getState, firebase) => {
  const auth = getAuth();
  dispatch(logoutRequest());
  return signOut(auth)
    .then(() => dispatch(logoutSuccess()))
    .then(() => dispatch(showCurrentUserSuccess(null)))
    .catch((e) => {
      dispatch(logoutError(e));
      throw e;
    });
};

export const googleLogin = () => (dispatch) => {
  const auth = getAuth();
  dispatch(googleLoginRequest());
  return setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithPopup(auth, googleAuthProvider)
      .then(() => dispatch(googleLoginSuccess()))
      .catch((e) => {
        dispatch(googleLoginError(e));
        throw e;
      });
  });
};

export const deleteFirebaseUser = () => (dispatch, getState, firebase) => {
  const auth = getAuth();
  const user = auth.currentUser;

  deleteUser(user)
    .then(() => {
      console.log('User deleted', user);
    })
    .catch((error) => {
      console.log('Error deleting user:', error);
    });

  // return firebase.deleteUser(currentUser);
};
