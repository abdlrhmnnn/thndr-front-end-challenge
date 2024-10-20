import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DetailsScreen from '../screens/details/DetailsScreen';
import ExploreScreen from '../screens/home/ExploreScreen';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {useTheme} from 'react-native-paper';

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {colors} = useTheme();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: colors.background},
              headerTintColor: colors.onBackground,
            }}
            name="Details"
            component={DetailsScreen}
          />
        </Stack.Navigator>
        <FlashMessage position="bottom" />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootStack;
