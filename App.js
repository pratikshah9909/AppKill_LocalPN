/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppState,
  Platform
} from 'react-native';


import { NativeBaseProvider } from 'native-base';;
import { NativeModules } from 'react-native';
const iosNativeModule = NativeModules.LocalNotificationManager;
const androidNativeModule  = NativeModules.AppKilledModule;

const AppWrapper = () => {
  return (
    <NativeBaseProvider>
        <App />
    </NativeBaseProvider>
  );
};

const App = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  const checkAndFireLocalNotification = (nextAppState) => {
    console.log("App state : " , nextAppState)
    // Handle app kill here
    if (nextAppState === 'background' || nextAppState === 'inactive') 
      {
        
        console.log('App is killed or sent to background');
        if(Platform.OS == 'ios'){
          // Fire the Notification using iOS Native module 
          iosNativeModule.scheduleLocalNotification();
        }
        else if(Platform.OS == 'android') {
          // Fire the Notification using Android Native module 
          androidNativeModule.AppKilledModule()
        }
      } else if (nextAppState === 'active') {
        console.log('App is active');
      }
      setAppState(nextAppState);
  }

  useEffect(() => {
    // Checking App state of the app
    const handleAppStateChange = (nextAppState) => {
      checkAndFireLocalNotification(nextAppState)
    };
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Kill the app and check Local Notification</Text>
    </View>
  );  
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1, 
    alignContent:'center',
    justifyContent:'center'  
  },
  textStyle:{
    fontSize:18,
    color:'red',
    alignSelf:'center',
    justifyContent:'center'
  },

})

export default AppWrapper;
