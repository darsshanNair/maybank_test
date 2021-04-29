import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { RootStackParamList } from '../../components/navigationComponents/stacks/MainStack';

type UserDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserDetails'
>;

type UserDetailsScreenScreenRouteProp = RouteProp<
  RootStackParamList,
  'UserDetails'
>;

interface Props {
  route: UserDetailsScreenScreenRouteProp;
  navigation: UserDetailsScreenNavigationProp;
}

const UserDetailsScreen = (props: Props): JSX.Element => {
  const user = props.route.params.user;
  const address = [
    user.address.street,
    user.address.city,
    user.address.suite,
    user.address.zipcode,
  ].join(', ');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.separator}>
          <Image
            style={styles.imageDimensions}
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Name : {user.name}</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Email : {user.email}</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Phone Number : {user.phone}</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Address : {address}</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Website : {user.website}</Text>
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>
            Company name : {user.company.name}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginBottom: 10,
  },
  imageDimensions: {
    width: 50,
    height: 100,
  },
});

export default UserDetailsScreen;
