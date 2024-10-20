import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {TickerType} from '../../api/tickers/types';
import {useTheme} from 'react-native-paper'; // Using React Native Paper's useTheme hook
import {styles} from './style';

type TickerItemProps = {
  ticker: TickerType;
  onPress: (ticker: string) => void;
};

const TickerItem = ({ticker, onPress}: TickerItemProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.itemContainer, {backgroundColor: colors.surface}]}
      onPress={() => onPress(ticker.ticker)}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/arrow.png')}
          style={styles.stockIcon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.tickerText, {color: colors.primary}]}>
          {ticker.ticker}
        </Text>
        <Text
          style={[styles.nameText, {color: colors.onSurface}]}
          numberOfLines={2}>
          {ticker.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TickerItem;
