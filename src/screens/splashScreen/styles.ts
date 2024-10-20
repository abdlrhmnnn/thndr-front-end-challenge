import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150, // Adjust as needed
    height: 150, // Adjust as needed
    resizeMode: 'contain', // Ensures the logo maintains its aspect ratio
  },
  developerName: {
    marginTop: 20,
    fontSize: 16,
    color: '#000', // Adjust color as needed
  },
});
