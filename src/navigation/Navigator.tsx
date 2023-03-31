import React, {useLayoutEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignupScreen} from '../screens/SignupScreen';

export type RootStackParamList = {
  Tabs: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const [initialRouteName, setInitialRouteName] =
    useState<keyof RootStackParamList>();

  useLayoutEffect(() => {
    AsyncStorage.getItem('isFirstStart').then(value => {
      if (value === null) {
        setInitialRouteName('OnboardingScreen');
      }
      if (value === 'false') {
        setInitialRouteName('LoginScreen');
      }
    });
  }, []);

  if (initialRouteName === undefined) {
    console.log('starts with undefined stack');
    return <></>;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={initialRouteName}>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="SignUpScreen" component={SignupScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
