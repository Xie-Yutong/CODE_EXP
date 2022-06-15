import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import icon from './profileicon.jpeg';
import { useNavigation } from '@react-navigation/native';
//import { LinearGradient } from 'expo-linear-gradient';

function ProfileScreen () {
  const navigation = useNavigation()
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.soldier} source={require('../../assets/soldier.png')}></Image>
        <Text>Profile screen</Text>

        <Button color="#558f6c"
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      <View style={{alignItems:'center'}}>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Text style={styles.titletext}>User Profile</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <img 
            style={{width:150, height:150, alignItem:'center'}}
            src={icon}
          />
        </View>
        <View style={{marginTop:22}}>
          <TouchableOpacity 
            style={styles.button} 
            onPress= {() => navigation.navigate("Appointments")} title="Appointmentss">
            <Text style={styles.buttontext}>All Appointments</Text>
          </TouchableOpacity>  
        </View>
        <View>
           <View style={styles.container}>
            <Text style={styles.infotextfirst}>Rank: 3SG</Text>
            <Text style={styles.infotext}>Name: Bobby Zhang</Text>
            <Text style={styles.infotext}>PES Status: A</Text>
            <Text style={styles.infotext}>Unit: 1 SIR</Text>
            <Text style={styles.infotext}>Email Address: bobzhang@gmail.com</Text>
            <Text style={styles.infotextlast}>Contact number: 1234 5678</Text>
            <Text style={styles.biotitle}>Bio</Text>
            <View style={styles.container2}>
              <Text style={styles.infotextfirst}>This user has not said anything about themselves...</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity>
              <Text style={{fontFamily:'Inter', fontSize:14, fontWeight:'400', fontStyle:'italic', textDecorationLine:'underline', color:'#2200CC', marginTop:5}}>Edit your profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  }

function AppointmentsScreen () {
  return (
    <View>
      <Text style={styles.titletext}>All Appointments</Text>;
    </View>
  );
}


const Stack = createNativeStackNavigator()

export default function ProfileStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Profile Page" component={ProfileScreen} />
      <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  titletext:{
    fontSize:24, 
    fontWeight:'700', 
    fontFamily:"Inter", 
    textDecorationLine: 'underline', 
    marginTop:38, 
    marginBottom:14,
    // textShadowColor: 'rgba(0, 0, 0, 0.25)',
    // textShadowOffset: {width: -4, height: 4},
    // textShadowRadius: 4
  },
  button: {
    width: 300,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#a6ede1",
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontFamily:'Inter',
    fontWeight: '600',
    fontSize:16,
    alignItems: 'center',
    padding: 5,
  },
  infotext:{
    fontFamily:"Inter",
    fontWeight:'400',
    fontSize:16,
    marginLeft:20,
    textAlign:"left",
  },
  infotextfirst:{
    fontFamily:"Inter",
    fontWeight:'400',
    fontSize:16,
    marginLeft:20,
    marginTop:20,
    textAlign:"left",
  },
  infotextlast:{
    fontFamily:"Inter",
    fontWeight:'400',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 25,
    textAlign:"left",
  },
  container:{
    marginTop: 40,
    backgroundColor: "#a6ede1",
    borderRadius: 15,
    alignItems:"center",
    height: 330,
    width: 300
  },
  container2:{
    marginTop: 20,
    backgroundColor: "#b9faf7",
    borderRadius: 15,
    height: 100,
    width: 265,
  },
  biotitle:{
    fontFamily:"Inter",
    fontWeight:'500',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 7,
  },
  biotext:{
    fontFamily:"Inter",
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    textAlign: 'left',
  },
  soldier: {
    width: 100,
    height: 100,
  },
})



{/*<LinearGradient
colors={['#c0392b', '#f1c40f']}
start={{x: 0, y: 0.5}}
end={{x: 1, y: 1}}
style={styles.button}
>
  <TouchableOpacity 
    style={styles.button} 
    onPress= {() => navigation.navigate("Appointments")} title="Appointmentss">
    <Text>All Appointments</Text>
  </TouchableOpacity>  
</LinearGradient> */}
