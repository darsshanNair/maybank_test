import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import { RootStackParamList } from '../../components/navigationComponents/stacks/MainStack';
import provideUserProps, {
  UserProps,
} from '../../redux/connectors/user/connectors';
import { Button } from '../../components/Button';
import { User } from '../../models/User';
import { InitialNewUserFormData } from './InitialNewUserFormData';

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
  const [newUserForm, setFormFields] = useState<User>(InitialNewUserFormData);

  const [isLocationFieldEnabled, setLocationFieldEnabled] = useState(false);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        var addressProp = newUserForm.address;
        var geolocation = {
          lat: location.latitude.toString(),
          lng: location.longitude.toString(),
        };
        addressProp.geo = geolocation;

        setFormFields({ ...newUserForm, address: addressProp });
      })
      .catch(error => {
        Alert.alert(
          'Location Exception',
          'Something went wrong with retrieving your current location. Please enter it manually.',
          [{ text: 'OK', onPress: () => setLocationFieldEnabled(true) }],
        );
      });
  }, []);

  const addNewUser = () => {
    const { name, username, email, phone, address } = newUserForm;
    const { street, city, zipcode } = address;

    if (
      name === '' &&
      username === '' &&
      email === '' &&
      phone === '' &&
      street === '' &&
      city === '' &&
      zipcode === ''
    ) {
      Alert.alert('Form Exception', 'Some required fields are not filled in.', [
        { text: 'OK', onPress: () => setLocationFieldEnabled(true) },
      ]);
    } else {
      props.addUser(newUserForm);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) =>
              setFormFields({ ...newUserForm, name: value })
            }
            placeholder="Enter name"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              setFormFields({ ...newUserForm, username: value });
              setFormFields({ ...newUserForm, email: value });
            }}
            placeholder="Enter email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              addressProp.street = value;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            placeholder="Enter street name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              addressProp.city = value;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            placeholder="Enter city name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              addressProp.suite = value;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            placeholder="Enter suite (optional)"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              addressProp.zipcode = value;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            placeholder="Enter zipcode"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              var geolocation = addressProp.geo;
              geolocation.lat = value;
              addressProp.geo = geolocation;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            editable={isLocationFieldEnabled}
            placeholder="Latitude"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var addressProp = newUserForm.address;
              var geolocation = addressProp.geo;
              geolocation.lng = value;
              addressProp.geo = geolocation;
              setFormFields({ ...newUserForm, address: addressProp });
            }}
            editable={isLocationFieldEnabled}
            placeholder="Longitude"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) =>
              setFormFields({ ...newUserForm, phone: value })
            }
            placeholder="Enter phone number"
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Website</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) =>
              setFormFields({ ...newUserForm, website: value })
            }
            placeholder="Enter website name (optional)"
          />
        </View>
        <View style={styles.separator}>
          <Text style={styles.headerText}>Company name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value: string) => {
              var companyProp = newUserForm.company;
              companyProp.name = value;
              setFormFields({ ...newUserForm, company: companyProp });
            }}
            placeholder="Enter company name (optional)"
          />
        </View>
        <View style={styles.buttonSeparator}>
          <Button title={'Add User'} onPress={addNewUser} />
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
