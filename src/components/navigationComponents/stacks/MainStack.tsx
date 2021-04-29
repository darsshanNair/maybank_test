import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../containers/home/HomeScreen';
import UserDetailsScreen from '../../../containers/details/UserDetailsScreen';
import { User } from '../../../models/User';

export type RootStackParamList = {
  Home: undefined;
  UserDetails: { user: User };
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
    </Stack.Navigator>
  );
};
