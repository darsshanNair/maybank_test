import { combineReducers } from 'redux';
import { userReducer, userLocationReducer } from './user/reducers';

const rootReducer = combineReducers({
  userInfo: userReducer,
  userLocationInfo: userLocationReducer,
});

export default rootReducer;
