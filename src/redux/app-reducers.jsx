import { combineReducers } from 'redux';
import * as globalReducer from '../modules/auth/redux';
// import { accountReducer } from '../modules/account/redux/reducers';
// import { shippingReducer } from '../modules/shipping/redux/reducers';
// import { userReducer } from '../modules/user/redux/reducers';
// import { clientReducer } from '../modules/client/redux/reducers';
// import { rolesReducer } from '../modules/roles/redux/reducers';
// import { profileReducer } from '../modules/profile/redux/reducers';
// import { containerReducer } from '../modules/containers/redux/reducers';

const appReducer = combineReducers({
  ...globalReducer,
//   accountReducer,
//   clientReducer,
//   containerReducer,
//   profileReducer,
//   rolesReducer,
//   shippingReducer,
//   userReducer,
});

export default appReducer;