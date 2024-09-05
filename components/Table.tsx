/**
 * `Table` component displays a table of users with filter options.
 *
 * This component fetches user data on mount and provides input fields to filter
 * the displayed users based on the provided headers: Name, Username, Email, and Phone.
 * 
 * It also handles the loading state, error handling, and displays a message
 * if no results are found.
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @component
 * 
 * @example
 * ```jsx
 * <Table />
 * ```
 */

import { ChangeEvent, useEffect, useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { useTypedDispatch, useUserFilterSelector } from '@/hooks/hooks';
import { fetchUsers } from '@/store/reducers/userCreator';
import { Record } from '@/components/Record';
import { filterSlice } from '@/store/reducers/filterSlice';
import { SearchIcon } from '@/components/SearchIcon';
import { NoItems } from '@/components/NoItems';
import {styles} from '@/styles/Table.styles';

export const Table = () => {
  const { users, error, isLoading, noResultsFound } = useUserFilterSelector();
  const dispatch = useTypedDispatch();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers()).finally(() => {
      setInitialLoading(false);
    });
  }, [dispatch]);

  if (error) {
    console.error(error);
    return <Text   style={styles.error}>Hmmm....Something went wrong</Text>;
  }

  const handleFilterChange = (header: string, value: string) => {
    dispatch(
      filterSlice.actions.updateFilters({
        [header.toLowerCase()]: value,
      })
    );
  };

  return (
    <View  style={styles.tableContainer}>
      <View  style={styles.tableHeader}>
        {['Name', 'Username', 'Email', 'Phone'].map((header) => (
          <View  key={header} style={styles.headerCell}>
            <Text  >{header}</Text>
            <View  style={styles.filterWrapper}>
              <SearchIcon/>
         <TextInput
                style={styles.filterInput}
                placeholder={`${header} filter`}
                onChangeText={(value) => handleFilterChange(header, value)}
              />
            </View>
          </View>
        ))}
      </View>

      <View  style={styles.tableBody}>
        {initialLoading ? (
          <View  style={styles.loaderWrapper}>
            <ActivityIndicator ></ActivityIndicator>
          </View>
        ) : noResultsFound ? (
          <NoItems />
        ) : (
          users.map((user) => <Record key={user.id} user={user} />)
        )}
      </View>
    </View>
  );
};