import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function MedScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Medical Centre</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress= {() => navigation.navigate("MedSecondScreen")} title="Second Screen">
            <Text style = {styles.chatHistory}>View Chat History</Text>
        </TouchableOpacity>
      </View>
    );
  }

function MedSecondScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Medical Centre Second Page!</Text>
      </View>
  );
}

const Stack = createStackNavigator()

export default function MedStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Medical Centre Page" component = {MedScreen} />
          <Stack.Screen name = "MedSecondScreen" component = {MedSecondScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    position: 'absolute',
    width: 370,
    height: 46,
    alignItems: 'center',
    top: 9,
    margin: 4,
  },
})