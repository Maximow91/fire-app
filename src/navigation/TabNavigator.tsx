import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screens/MainScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {theme} from '../config/theme';
import {SvgIcon} from '../components/SvgIcon';

export type TabParamList = {
  MainScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.mainBlue,
        //   tabBarInactiveTintColor: theme.color.gray,
        tabBarHideOnKeyboard: false,
        tabBarStyle: {
          height: 75,
          borderTopWidth: 1,
          elevation: 20,
          shadowOpacity: 0,
          backgroundColor: theme.color.mainPurple,
          // borderTopColor: theme.color.ligthGray,
        },
        tabBarItemStyle: {height: Platform.OS === 'ios' ? 60 : 75},
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={styles.tabItem}>
              {focused ? (
                <SvgIcon name={'list_active'} color={color} size={24} />
              ) : (
                <SvgIcon name={'list'} color={color} size={24} />
              )}
              <Text style={[styles.tabItemText, {color: color}]}>Main</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={styles.tabItem}>
              {focused ? (
                <SvgIcon name={'user_fill'} color={color} size={24} />
              ) : (
                <SvgIcon name={'user'} color={color} size={24} />
              )}
              <Text style={[styles.tabItemText, {color: color}]}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemText: {
    fontSize: 14,
    lineHeight: 19.07,
  },
});
