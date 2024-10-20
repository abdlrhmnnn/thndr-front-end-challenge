import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    height: 150,
  },
  stockIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  tickerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
