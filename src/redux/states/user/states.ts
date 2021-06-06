import { Location } from '../../../models/Address';
import { User } from '../../../models/User';

export interface UserState {
  userInfo: UserInfoState;
  userLocationInfo: UserLocationState;
}

export interface UserInfoState {
  loading: boolean;
  users: User[];
  error: string;
}

export interface UserLocationState {
  loading: boolean;
  location: Location | null;
  error: string;
}
