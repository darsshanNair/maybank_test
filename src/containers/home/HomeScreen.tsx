import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from '../../components/Button';
import { CardView } from '../../components/CardView';
import { ItemSeparator } from '../../components/ItemSeparator';
import { RootStackParamList } from '../../components/navigationComponents/stacks/MainStack';
import { User } from '../../models/User';
import provideUserProps, {
  UserProps,
} from '../../redux/connectors/user/connectors';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props extends UserProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = (props: Props): JSX.Element => {
  useEffect(() => {
    props.getUser();
  }, []);

  const renderItem = ({ item }) => (
    <CardView
      title={item.name}
      subtitle={item.email}
      onPress={() => props.navigation.navigate('UserDetails', { user: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title={'Add New User'}
          onPress={() => props.navigation.navigate('NewUser')}
        />
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          data={props.userState.user.users}
          renderItem={renderItem}
          keyExtractor={(item: User) => item.id.toString()}
          contentContainerStyle={styles.flatlistView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  flatlistView: {
    paddingBottom: 60,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default provideUserProps(HomeScreen);
