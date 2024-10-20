import React from 'react';
import {View, Text} from 'react-native';

console.log('TickerItem mock is being used');

const TickerItem = ({ticker}) => (
  <View testID="ticker-item">
    <Text testID="ticker-symbol">{ticker.ticker}</Text>
    <Text testID="ticker-name">{ticker.name}</Text>
  </View>
);

export default TickerItem;
