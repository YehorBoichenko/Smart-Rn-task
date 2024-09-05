/**
 * `Record` component displays user information in a table row format.
 * 
 * @component
 * @param {Object} props - The props for the component.
 * @param {User} props.user - The user object containing user details.
 * @returns {JSX.Element} A table row displaying user information.
 * 
 * @example
 * const user = {
 *   name: "John Doe",
 *   username: "johndoe",
 *   email: "john.doe@example.com",
 *   phone: "123-456-7890"
 * };
 * 
 * <Record user={user} />
 */
import React, { memo } from 'react';
import { View, Text} from 'react-native';
import { User } from '@/types/user';
import { styles } from '@/styles/Record.styles';
export const Record = memo(({ user }: { user: User }) => {
  return (
     <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.firstCell]}>{user.name}</Text>
      <Text style={styles.tableCell}>{user.username}</Text>
      <Text style={styles.tableCell}>{user.email}</Text>
      <Text style={styles.tableCell}>{user.phone}</Text>
     </View>
  );
});
