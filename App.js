import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import Card from './components/Card';
import StocksDisplayScreen from './screens/StocksDisplayScreen';
import StockData from './screens/StockData';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllStocks" component={StocksDisplayScreen} />
        <Stack.Screen name="StockData" component={StockData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
