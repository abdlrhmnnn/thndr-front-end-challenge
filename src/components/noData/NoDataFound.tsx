// NoDataFound.js
import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {useTheme} from 'react-native-paper';

const NoDataFound = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/noData.png')} style={styles.logo} />
      <Text style={[styles.message, {color: colors.onSurface}]}>
        No Data Found
      </Text>
    </View>
  );
};

export default NoDataFound;
