import { Action } from 'redux';
import { connect } from 'react-redux';
import { User } from '../../../models/User';
import * as UserActions from '../../actions/user/actions';
import { UserState } from '../../states/user/states';

export interface UserProps {
  getUser: () => Action;
  getUserLocation: () => Action;
  addUser: (user: User) => Action;
  userState: UserState;
}

export const getUser = () => ({
  type: UserActions.GET_USER,
});

export const getUserLocation = () => ({
  type: UserActions.GET_USER_LOCATION,
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
  getUserLocation,
  addUser,
};

/**
 * State
 */
const mapStateToProps = (state: UserState) => ({
  userState: state,
});

const provideUserProps = connect(mapStateToProps, mapDispatchToProps);

export default provideUserProps;
