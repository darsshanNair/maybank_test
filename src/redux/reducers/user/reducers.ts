import * as UserActions from '../../actions/user/actions';
import { GetUserState } from '../../states/user/states';

const getUserInitialState: GetUserState = {
  loading: false,
  users: [],
  error: '',
};

export const getUserReducer = (
  state: GetUserState = getUserInitialState,
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

    default:
      return state;
  }
};
