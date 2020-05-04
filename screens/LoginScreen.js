import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import GooglSigninButton from '../GoogleSignin';


import Card from '../components/Card';

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.loginCard}>
        <View>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.googleConatiner}>
          <GooglSigninButton />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '88%',
  },
  loginCard: {
    width: '85%',
    height: '85%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
  },
  text: {
    fontFamily: 'Oxygen-Light',
    fontSize: 20,
    paddingVertical: 10,
  },
  googleConatiner: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
