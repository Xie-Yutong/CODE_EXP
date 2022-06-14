import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.soldier} source={require('../../assets/soldier.png')}></Image>
        <Text>Profile screen</Text>

        <Button color="#558f6c"
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    soldier: {
      width: 100,
      height: 100,
    },
  })