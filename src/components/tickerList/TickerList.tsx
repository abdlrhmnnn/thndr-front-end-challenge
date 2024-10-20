import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {TickerType} from '../../api/tickers/types';
import TickerItem from '../tickerItem/TickerItem';
import {styles} from './style';
import {useTheme} from '@react-navigation/native';
import NoDataFound from '../noData/NoDataFound';

type TickerListProps = {
  tickerList: TickerType[];
  onEndReached: () => void;
  isFetching?: boolean;
  onPress: (ticker: string) => void;
  numColumns?: number;
};

const TickerList = ({
  tickerList,
  onEndReached,
  isFetching,
  onPress,
  numColumns = 2,
}: TickerListProps) => {
  const {colors} = useTheme();

  const renderItem = ({item}: {item: TickerType}) => {
    return <TickerItem ticker={item} onPress={onPress} />;
  };

  return (
    <FlatList
      data={tickerList}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
      numColumns={numColumns}
      key={numColumns}
      contentContainerStyle={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : null
      }
      ListEmptyComponent={<NoDataFound />}
    />
  );
};

export default TickerList;
