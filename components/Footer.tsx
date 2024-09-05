/**
 * A functional React component that renders the footer of the User Management System.
 * 
 * @returns {JSX.Element} A footer element containing a copyright notice.
 */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/styles/Footer.styles';

export const Footer: React.FC = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 User Management System</Text>
  </View>
);
