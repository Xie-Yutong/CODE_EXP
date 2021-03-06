import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Menu Page/Home';
import ProfileScreen from './screens/Profile Page/Profile'
import ParaScreen from './screens/Para Page/Para';
import MedScreen from './screens/Med Page/Med';
import Schedule from './screens/Med Page/Med';
import Fontisto from "react-native-vector-icons/Fontisto";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Paracounsellor') {
              iconName = 'doctor';
            } else if (route.name === 'Medical Centre') {
              iconName = 'hospital';
            } else if (route.name === 'Profile') {
              iconName = 'person'
            }
            return <Fontisto name={iconName} size={size} color={color} />;
          },
         tabBarActiveTintColor: "#558F6C",
         tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Tab.Screen name="Paracounsellor" options={{headerShown: false}} component={ParaScreen} />
        <Tab.Screen name="Medical Centre" options={{headerShown: false}} component={MedScreen} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
      </Tab.Navigator>
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
