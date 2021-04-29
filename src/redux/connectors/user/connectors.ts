import { Action } from 'redux';
import { connect } from 'react-redux';
import { User } from '../../../models/User';
import * as UserActions from '../../actions/user/actions';
import { GetUserState } from '../../states/user/states';

export interface UserProps {
  getUser: () => Action;
  addUser: (user: User) => Action;
  getUserState: GetUserState;
}

export const getUser = () => ({
  type: UserActions.GET_USER,
});

export const addUser = (user: User) => ({
  type: UserActions.ADD_USER,
  payload: user,
});

/**
 * Dispatchers
 */

const mapDispatchToProps = {
  getUser,
  addUser,
};

/**
 * State
 */
const mapStateToProps = (state: GetUserState) => ({
  getUserState: state,
});

const provideUserProps = connect(mapStateToProps, mapDispatchToProps);

export default provideUserProps;
