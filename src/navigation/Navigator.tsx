import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignupScreen} from '../screens/SignupScreen';
import {TabNavigator} from './TabNavigator';
import {CommonStoreContext} from '../strore/CommonStore';
import {observer} from 'mobx-react-lite';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export type RootStackParamList = {
  Tabs: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = observer(() => {
  const [initialRouteName, setInitialRouteName] =
    useState<keyof RootStackParamList>();

  const {user} = useContext(CommonStoreContext);

  useEffect(() => {
    AsyncStorage.getItem('isFirstStart').then(value => {
      if (value === null) {
        setInitialRouteName('OnboardingScreen');
      }
      if (value === 'false') {
        if (user) {
          setInitialRouteName('Tabs');
        }
        setInitialRouteName('LoginScreen');
      }
    });
    GoogleSignin.configure({
      webClientId:
        '704666141293-ii3i0baa2amtgcp238u4g57658f47cdo.apps.googleusercontent.com',
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

        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Tabs" component={TabNavigator} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
});
