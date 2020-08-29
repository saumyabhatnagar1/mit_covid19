import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home'
import Login from  './src/screens/login'
import Signup from './src/screens/signup'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Welcome from './src/screens/welcome'
import BookSlot from './src/screens/bookslot';
import Profile from './src/screens/profile'
import { AntDesign } from '@expo/vector-icons'; 

const Tabs=createBottomTabNavigator()
const Stack=createStackNavigator()

const RootHome=()=>{
  return (
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'welcome') {
        iconName = 'home';
      } else if (route.name === 'Profile') {
        iconName = 'profile';
      }

      return <AntDesign name={iconName} size={24} color="black" />
    },
  })}
  tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  }}
  
  
  >
    <Tabs.Screen name="welcome" component={Welcome}></Tabs.Screen>
    <Tabs.Screen name="Profile" component={Profile}></Tabs.Screen>
  </Tabs.Navigator>
  )
}


export default function App() {
  return (
   //<Home/>
   //<Login/>
   //<Signup/>
   
<NavigationContainer>
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
    <Stack.Screen name="bookslot" component={BookSlot}></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
