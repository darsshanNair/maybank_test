import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ItemSeparatorProps {}

export const ItemSeparator = () => <View style={styles.separatorView} />;

const styles = StyleSheet.create({
  separatorView: {
    height: 10,
    width: '100%',
    backgroundColor: '#778899',
  },
});
