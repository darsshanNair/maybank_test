import { User } from '../../models/User';

export const InitialNewUserFormData = {
  id: Date.now(),
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: { lat: '', lng: '' },
  },
  phone: '',
  website: '',
  company: { name: '', catchPhrase: '', bs: '' },
} as User;
