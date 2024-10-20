import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

import {useGetTickerDetailsQuery} from '../../api/tickers/api';
import {TickerType} from '../../api/tickers/types';
import {errorNoty} from '../../utils/errorHandling';
import {styles} from './styles';

import {RouteProp, useRoute} from '@react-navigation/native';
import {strings} from '../../utils/constants';

import {RootStackParamList} from '../../navigation /types';

type DetialsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const {colors} = useTheme();
  const route = useRoute<DetialsScreenRouteProp>();
  const {tickerID} = route.params;
  const {data, isLoading, error} = useGetTickerDetailsQuery(tickerID);
  const [ticker, setTicker] = useState<TickerType>();
  useEffect(() => {
    if (data) {
      setTicker(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      errorNoty({
        msg: strings.errors.general.data,
      });
    }
  }, [error]);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          testID="loading-indicator"
        />
      ) : (
        <View>
          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Ticker:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.ticker}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Market:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.market}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Locale:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.locale}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Primary Exchange:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.primaryExchange}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Market Cap:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.marketCap}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Address:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.address?.address1}
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.address?.city}, {ticker?.address?.state}{' '}
              {ticker?.address?.postalCode}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.label, {color: colors.onBackground}]}>
              Description:
            </Text>
            <Text style={[styles.value, {color: colors.primary}]}>
              {ticker?.description}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
