import { ofType } from 'redux-observable';
import { switchMap, map, catchError, mapTo, delay } from 'rxjs/operators';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { BASE_SERVICE_URL } from '../../../common/AppConstants';
import * as UserActions from '../../actions/user/actions';
import { User } from '../../../models/User';

export function fetchUsersEpic(action$: any) {
  return action$.pipe(
    ofType(UserActions.GET_USER),
    switchMap(() => {
      return ajax({
        url: BASE_SERVICE_URL + '/users',
        method: 'get',
      }).pipe(
        map((payload: AjaxResponse) => {
          const fetchUserResponse = payload.response as User[];
          return {
            type: UserActions.GET_USER_SUCCESS,
            payload: fetchUserResponse,
          };
        }),
        catchError(
          (payload: AjaxError): Observable<any> => {
            const error = {
              type: UserActions.GET_USER_FAILURE,
              payload: payload.message,
            };
            return of(error);
          },
        ),
      );
    }),
  );
}

export function addUserEpic(action$): Observable<any> {
  return action$.pipe(
    ofType(UserActions.ADD_USER),
    map((action: any) => {
      const user = action.payload;

      if (user) {
        return {
          type: UserActions.ADD_USER_SUCCESS,
          payload: user,
        };
      } else {
        return {
          type: UserActions.ADD_USER_FAILURE,
          payload: 'Add user exception',
        };
      }
    }),
  );
}
