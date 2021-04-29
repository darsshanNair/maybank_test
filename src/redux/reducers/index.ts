import { combineReducers } from 'redux';
import { getUserReducer } from './user/reducers';

const rootReducer = combineReducers({
  getUser: getUserReducer,
});

export default rootReducer;
