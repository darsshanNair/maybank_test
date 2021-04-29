import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '../components/navigationComponents/stacks/MainStack';
import { Provider } from 'react-redux';
import { store } from '../redux/stores/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
