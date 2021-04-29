import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../containers/home/HomeScreen';
import UserDetailsScreen from '../../../containers/details/UserDetailsScreen';
import { User } from '../../../models/User';
import NewUserScreen from '../../../containers/newUser/NewUserScreen';

export type RootStackParamList = {
  Home: undefined;
  UserDetails: { user: User };
  NewUser: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ headerTitle: 'User Details' }}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUserScreen}
        options={{ headerTitle: 'New User' }}
      />
    </Stack.Navigator>
  );
};
