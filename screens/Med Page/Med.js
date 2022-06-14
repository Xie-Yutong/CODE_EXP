import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import CheckBox from "expo-checkbox";

function MedScreen() {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Confirm to go to Medical Centre?</Text>
        <TouchableOpacity 
          style={styles.medcenbutton} 
          onPress= {() => navigation.navigate("Symptoms")} title="Symptoms">
            <Text style = {styles.yesButton}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.medcenbutton} 
          onPress= {() => navigation.navigate("HomeScreen")} title="Home Screen">
            <Text style = {styles.noButton}>No</Text>
        </TouchableOpacity>
      </View>
    );
  }

function Symptoms() {
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container}>
  
      <Text style={styles.sectionTitle}>Please tick all the applicable symptoms that you have experienced</Text>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Sore Throat</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Cough</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Runny Nose</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Fever (Above 38℃)</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Fever (38℃ and below)</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Muscle Pain</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Vomiting</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Diarrhoea</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Nausea</Text>
      </View>
      <View style={styles.wrapper}>
        <CheckBox value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#558F6C" : undefined}></CheckBox>
        <Text style={styles.text}>Others</Text>
      </View>
      <Button color={"#558F6C"}
        title="Submit"
        disabled={!agree}
      />
    </View>
  );
}

function HomeScreen() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Go to home page!</Text>
      </View>
  );
}

const Stack = createStackNavigator()

export default function MedStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Medical Centre Page" component = {MedScreen} />
          <Stack.Screen name = "Symptoms" component = {Symptoms} />
          <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  medcenbutton: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    width: 370,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
    margin: 4,
  },

  sectionTitle: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  wrapper: {
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  text: {
    paddingHorizontal: 10,
  }
})