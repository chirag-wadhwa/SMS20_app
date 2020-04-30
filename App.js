import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import Card from './components/Card';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome</Text>
        </View>
        <LoginScreen />
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 25,
  },
  header: {
    width: '100%',
    height: '12%',
    backgroundColor: '#14EEE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  headerCard: {
    width: '80%',
    alignItems: 'center',
  },
});

export default App;
