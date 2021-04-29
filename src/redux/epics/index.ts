import { combineEpics } from 'redux-observable';
import { fetchUsersEpic } from './user/epic';

const rootEpic = combineEpics(fetchUsersEpic);

export default rootEpic;
