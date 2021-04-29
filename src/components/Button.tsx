import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
        <Text style={styles.titleText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    backgroundColor: '#6699cc',
    height: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
