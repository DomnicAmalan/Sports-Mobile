/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Quotes from './components/quotes';
import SignIn from './components/SignIn'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { set } from 'react-native-reanimated';

const Stack = createStackNavigator();


const App: () => React$Node = () => {

  const [isRegister, setRegister] = useState(false)
  const [isLoggedIn, setLogin] = useState(true)

  useEffect(() => {
    const isLoggedIn = AsyncStorage.getItem('userToken')
    console.log(isLoggedIn)
    isLoggedIn ? setLogin(true) : setLogin(false)
  }, [])
  
  return (
    <React.Fragment>
      {isLoggedIn ? 
        <View>
          <Dashboard setLogin={setLogin}/>
        </View> 
      : 
      <>
        <StatusBar backgroundColor="#1A2040" />
          <View style={styles.logo}>
            <Image source={require('./assets/logo.png')} style={styles.image}/>
          </View>
          <View style={styles.top}>
            <Quotes />
          </View>
          <View style={styles.signin}>
            {isRegister ? <Register setRegister={setRegister}/> : <SignIn setRegister= {setRegister} setLogin={setLogin}/>}
          </View>
        </>
        }
      </React.Fragment>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#50AEDE",
    flex: 2,
  },
  signin:{
    flex:3,
    color: "#1A2040",
    width: 100,
    height: 100,
    borderRadius: 100/2
  },
  logo: {
    flex: 1,
    backgroundColor: "#50AEDE",
    height: 20,
  },
  image:{
    alignSelf: "center",
    width: 100,
    height: 100,
    top: 25
  }
});

export default App;
