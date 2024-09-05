import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,  // rowGap isn't supported; use padding/margin instead
    textAlign: 'center',  // textAlign should be used within Text components
  },
  errorPage: {
    margin: 'auto',
    },
  errorPageHeadingTitle: {
    textTransform: 'capitalize',
    fontSize: 36,
    fontWeight: '500',
    color: '#faca2e',
  },
  errorPageHeadingDescription: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: '200',
  },
  errorPageButton: {
    color: '#000',  // Replace 'inherit' with a color value
    textDecorationLine: 'none',
    borderColor: '#faca2e',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '200',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#faca2e',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 2,
    textTransform: 'capitalize',
  },
  eyes: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,  // Replace with padding/margin if needed
  },
  eye: {
    width: 80,
    height: 80,
    backgroundColor: '#faca2e',
    borderRadius: 40,  // 50% isn't used; half of width/height
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyePupil: {
    width: 30,
    height: 30,
    backgroundColor: '#050505',
    borderRadius: 15,  // Same as above
    // Animation will need to be handled differently using Animated API
  },
  // Keyframes and animations need to be handled using React Native's Animated API
});

