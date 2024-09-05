import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tableRow: {
    flexDirection: width > 580 ? 'row' : 'column',
    borderBottomWidth: width > 580 ? 1 : 2,
    borderBottomColor: '#4b4848',
    alignItems: width > 580 ? 'center' : 'flex-start',
  },
  tableCell: {
    flex: 1,
    padding: width > 580 ? (width > 1090 ? 10 : 8) : 6,
    fontFamily: 'Poppins',
    fontSize: width > 580 ? (width > 1090 ? 18 : 16) : 14,
    lineHeight: width > 580 ? (width > 1090 ? 22 : 20) : 18,
    letterSpacing: -0.01,
    borderRightWidth: width > 580 ? 1 : 0,
    borderRightColor: '#4b4848',
    width: width <= 580 ? '100%' : 'auto',
    borderBottomWidth: width <= 580 ? 1 : 0,
    borderBottomColor: '#4b4848',
  },
  firstCell: {
    fontWeight: 'bold',
  },
  lastCell: {
    borderRightWidth: 0,
    borderBottomWidth: width <= 580 ? 0 : undefined,
  },
});
