import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface CardViewProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export const CardView = (props: CardViewProps): JSX.Element => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.cardView}>
          <View style={styles.cardContentView}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.subtitleText}>{props.subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderColor: '#000000',
    borderWidth: 1,
  },
  cardContentView: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
