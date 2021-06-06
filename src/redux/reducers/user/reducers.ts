import * as UserActions from '../../actions/user/actions';
import { UserLocationState, UserInfoState } from '../../states/user/states';

const getUserInitialState: UserInfoState = {
  loading: false,
  users: [],
  error: '',
};

const userLocationInitialState: UserLocationState = {
  loading: false,
  location: null,
  error: '',
};

export const userReducer = (
  state: UserInfoState = getUserInitialState,
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

export const userLocationReducer = (
  state: UserLocationState = userLocationInitialState,
  action: any,
) => {
  switch (action.type) {
    case UserActions.GET_USER_LOCATION:
      return {
        ...state,
        loading: true,
      };

    case UserActions.GET_USER_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.payload,
      };

    case UserActions.GET_USER_LOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
