import { ofType } from 'redux-observable';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { from, Observable, of } from 'rxjs';
import { BASE_SERVICE_URL } from '../../../common/AppConstants';
import * as UserActions from '../../actions/user/actions';
import { User } from '../../../models/User';
import { ILocationService } from '../../../services/ILocationService';
import LocationService from '../../../services/LocationService';
import { Location } from '../../../models/Address';

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

export function addUserEpic(action$: any): Observable<any> {
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

export function getUserLocationEpic(action$: any) {
  return action$.pipe(
    ofType(UserActions.GET_USER_LOCATION),
    switchMap(() => {
      var service: ILocationService = new LocationService();
      return from(service.getLatitudeAndLongitude()).pipe(
        mergeMap((result: Location) =>
          of({
            type: UserActions.GET_USER_LOCATION_SUCCESS,
            payload: result,
          }),
        ),
        catchError(
          (exception): Observable<any> => {
            console.log(exception);
            const error = {
              type: UserActions.GET_USER_LOCATION_FAILURE,
              payload: 'Error getting user location',
            };
            return of(error);
          },
        ),
      );
    }),
  );
}
