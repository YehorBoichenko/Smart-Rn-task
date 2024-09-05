import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  noItemsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', 
  },
  noItemsTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 16,
    color: '#4a90e2',
  },
  message: {
    fontSize: 20,
    fontFamily: 'Poppins',
    marginBottom: 8,
    color: '#333',
  },
  suggestion: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#999',
  },
});
