/**
 * A functional React component that displays a message indicating
 * that no items were found. It includes a title, a message, and a suggestion.
 */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/styles/NoItems.styles';

export const NoItems = () => {
  return (
    <View style={styles.noItemsContainer}>
      <Text style={styles.noItemsTitle}>Oops!</Text>
      <Text style={styles.message}>Sorry, No items found....</Text>
      <Text style={styles.suggestion}>Try another variant</Text>
    </View>
  );
};
