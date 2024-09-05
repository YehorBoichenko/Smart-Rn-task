import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    minHeight: '100%',
    marginBottom: 150,
  },
    tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e8f5e9',
    borderBottomWidth: 2,
        borderBottomColor: '#4b4848',
      ...(screenWidth <= 560 && {
      // Styles for screens 560px wide or less
      flexDirection: 'column', // Example change
      padding: 10, // Example padding adjustment
    }),
  },
  headerCell: {
    flex: 1,
    padding: width < 1090 ? 8 : 10,
    fontSize: width < 1090 ? 16 : 18,
    textAlign: 'left',
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderRightColor: '#9bcf96',
  },
  tableBody: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  filterInput: {
    width: '100%',
    backgroundColor: '#f9fbff',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: 'Poppins',
    fontSize: width < 580 ? 14 : 16,
    paddingVertical: width < 580 ? 8 : 9,
    paddingHorizontal: 5,
    paddingLeft: width < 580 ? 30 : 40,
  },
  filterWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width < 580 ? 10 : 0,
  },
  svgIcon: {
    position: 'absolute',
    left: 10,
    width: width < 580 ? 14 : 16,
    height: width < 580 ? 14 : 16,
  },
  loaderWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
//   loader: {
//     borderWidth: 16,
//     borderColor: '#f3f3f3',
//     borderTopWidth: 16,
//     borderTopColor: '#3498db',
//     borderRadius: 50,
//     width: 120,
//     height: 120,
//   },
  error: {
    textAlign: 'center',
    padding: 20,
    color: 'red',
  },
});
