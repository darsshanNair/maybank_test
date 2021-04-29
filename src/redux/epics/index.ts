import { combineEpics } from 'redux-observable';
import { fetchUsersEpic, addUserEpic } from './user/epic';

const rootEpic = combineEpics(fetchUsersEpic, addUserEpic);

export default rootEpic;
