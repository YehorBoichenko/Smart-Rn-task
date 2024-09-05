import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get the screen height

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Takes up the available space, similar to min-height: 100vh
    flexDirection: 'column',
    minHeight: height, // Fallback for height; you could use percentages as well
    maxWidth: 1860,
  },
});
