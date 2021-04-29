import { User } from '../../../models/User';

export interface GetUserState {
  loading: boolean;
  users: User[];
  error: string;
}
