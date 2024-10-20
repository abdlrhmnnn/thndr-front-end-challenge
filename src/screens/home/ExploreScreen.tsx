import React, {
  useEffect,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from 'react-native-paper';
import {Button} from 'react-native-paper';
import TickerList from '../../components/tickerList/TickerList';
import {TickerType} from '../../api/tickers/types';
import {
  useGetTickersListQuery,
  useLazyGetNextTickersListQuery,
} from '../../api/tickers/api';
import {errorNoty} from '../../utils/errorHandling';
import {styles} from './style';
import {ThemeContext} from '../../../App';
import SearchBar from '../../components/searchBar/SearchBar';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation /types';
import {useNavigation} from '@react-navigation/native';

type ExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Explore'
>;

const ExploreScreen = () => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();
  const {colors} = useTheme();
  const {toggleTheme, isDarkTheme} = useContext(ThemeContext);
  const [tickerListData, setTickerListData] = useState<TickerType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [nextURL, setNextURL] = useState<string>();
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  const {
    data: tickersData,
    isLoading,
    error,
  } = useGetTickersListQuery({searchQuery: debouncedSearchQuery});

  const [triggerNextTickersList, {isFetching}] =
    useLazyGetNextTickersListQuery();

  useEffect(() => {
    if (tickersData?.results && tickersData.results.length > 0) {
      setTickerListData([...tickersData.results]);
      setNextURL(tickersData.nextUrl);
    }
  }, [tickersData]);

  useEffect(() => {
    if (error && 'data' in error) {
      errorNoty({
        msg: (error as any).data.error,
      });
    }
  }, [error]);

  const callNextPage = useCallback(async () => {
    if (nextURL) {
      const tickers = await triggerNextTickersList(nextURL);
      if (tickers.data && tickers.data.results) {
        setTickerListData(prev => [...prev, ...(tickers.data?.results ?? [])]);
        setNextURL(tickers.data.nextUrl);
      }
    }
  }, [nextURL, triggerNextTickersList]);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}
      edges={['top']}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <Button
          mode="contained"
          onPress={toggleTheme}
          style={{marginBottom: 20}}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
        </Button>
      </View>

      <SearchBar
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
        onEndEditing={onSearchSubmit} // Pass the function to handle the API call on end editing
      />

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          testID="loading-indicator"
        />
      ) : (
        <TickerList
          tickerList={tickerListData}
          onEndReached={callNextPage}
          isFetching={isFetching}
          onPress={ticker => navigation.navigate('Details', {tickerID: ticker})}
        />
      )}
    </SafeAreaView>
  );
};

export default ExploreScreen;
