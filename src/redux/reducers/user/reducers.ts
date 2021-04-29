import * as UserActions from '../../actions/user/actions';
import { UserState } from '../../states/user/states';

const getUserInitialState: UserState = {
  loading: false,
  users: [],
  error: '',
};

export const userReducer = (
  state: UserState = getUserInitialState,
  action: any,
) => {
  switch (action.type) {
    case UserActions.GET_USER:
      return {
        ...state,
        loading: true,
      };
    case UserActions.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case UserActions.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UserActions.ADD_USER:
      return {
        ...state,
        loading: false,
      };

    case UserActions.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case UserActions.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
