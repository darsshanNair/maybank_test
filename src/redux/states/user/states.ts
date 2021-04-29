import { User } from '../../../models/User';

export interface UserState {
  loading: boolean;
  users: User[];
  error: string;
}
