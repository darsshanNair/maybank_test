import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../../../containers/home/HomeScreen';
import UserDetailsScreen from '../../../containers/details/UserDetailsScreen';
import { User } from '../../../models/User';
import NewUserScreen from '../../../containers/newUser/NewUserScreen';

export type RootStackParamList = {
  Home: undefined;
  UserDetails: { user: User };
  NewUser: undefined;
};

export type MainStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
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
