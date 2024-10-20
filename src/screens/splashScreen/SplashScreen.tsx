import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation /types';
import {useNavigation} from '@react-navigation/native';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;
const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Explore');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Nasdaq.png')} style={styles.logo} />
      <Text style={styles.developerName}>Developed by Abdelrhman Mohammed</Text>
    </View>
  );
};

export default SplashScreen;
