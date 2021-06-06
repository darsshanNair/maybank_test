import { combineEpics } from 'redux-observable';
import { fetchUsersEpic, addUserEpic, getUserLocationEpic } from './user/epic';

const rootEpic = combineEpics(fetchUsersEpic, addUserEpic, getUserLocationEpic);

export default rootEpic;
