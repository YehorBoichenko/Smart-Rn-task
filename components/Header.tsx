import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/styles/Header.styles';

/**
 * A functional component that renders the header section of the page.
 *
 * This component displays a header with a title for the User Management section.
 * @returns {JSX.Element} The header element containing the title.
 */
export const Header = (): JSX.Element => (
  <View style={styles.header}>
    <Text style={styles.title}>User Management</Text>
  </View>
);