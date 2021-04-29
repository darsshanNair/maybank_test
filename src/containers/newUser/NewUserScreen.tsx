import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import { RootStackParamList } from '../../components/navigationComponents/stacks/MainStack';
import provideUserProps, {
  UserProps,
} from '../../redux/connectors/user/connectors';
import { Button } from '../../components/Button';

type NewUserScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewUser'
>;

type NewUserScreenScreenRouteProp = RouteProp<RootStackParamList, 'NewUser'>;

interface Props extends UserProps {
  route: NewUserScreenNavigationProp;
  navigation: NewUserScreenScreenRouteProp;
}

const NewUserScreen = (props: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter name"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter street name"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter city name"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter suite (optional)"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter zipcode"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            editable={false}
            placeholder="Latitude"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            editable={false}
            placeholder="Longitude"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter phone number"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Website</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter website name (optional)"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Company name</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Enter company name (optional)"
          />
        </View>
        <View style={styles.buttonSeparator}>
          <Button title={'Add User'} onPress={() => {}} />
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
  buttonSeparator: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
});

export default provideUserProps(NewUserScreen);
