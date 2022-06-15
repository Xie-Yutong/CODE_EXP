import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Screen from './Screen';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
// import Schedule from './Schedule'

function ParaScreen () {
  const navigation = useNavigation()
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity 
        style={styles.button}
        onPress= {() => navigation.navigate("ChatHistory")} title="Chat History">
          <Text style={styles.chatHistory}>View Chat History</Text>
      </TouchableOpacity>

      <Screen>
        <SearchBar/>
      </Screen>
      <FontAwesome style={styles.SearchIcon}name="search" size={24} color="black" />

      <Text style={styles.Para}>List of Paracounsellors</Text>

      <TouchableOpacity 
        style={styles.counsellor1} 
        onPress= {() => navigation.navigate("ParaThirdScreen")} title="Paracounsellor1">
          <Text style = {styles.counsellorInfo}>2LT John Smith</Text>
          <Text style = {{color:'white'}}>5 Years of counselling experience.</Text>
          <Text style = {{color:'white'}}>Kranji Camp I</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.counsellor2} 
        onPress= {() => navigation.navigate("ParaFourthScreen")} title="Paracounsellor2">
          <Text style = {styles.counsellorInfo}>2LT Andy Lim</Text>
          <Text style = {{color:'white'}}>3 Years of counselling experience.</Text>
          <Text style = {{color:'white'}}>Kranji Camp II</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.counsellor3} 
        onPress= {() => navigation.navigate("ParaFifthScreen")} title="Paracounsellor3">
          <Text style = {styles.counsellorInfo}>2LT Cindy Lee</Text>
          <Text style = {{color:'white'}}>2 Years of counselling experience.</Text>
          <Text style = {{color:'white'}}>Kranji Camp III</Text>
      </TouchableOpacity>
    </View>
  );
}

function ChatHistory() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Chat History</Text>
      </View>
      
  );
}

function ParaThirdScreen() {
  const navigation = useNavigation()
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <EvilIcons style={styles.image} name="user" size={24} color="black" />
          <Text style = {{fontSize: 20}}>2LT John Smith</Text>
          <TouchableOpacity 
              style={styles.chat} 
              onPress= {() => navigation.navigate("Chat")} title="Chat">
              <Text style = {styles.chatText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule a call</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule face to face</Text>
          </TouchableOpacity>
      </View>
  );
}

function ParaFourthScreen() {
  const navigation = useNavigation()
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <EvilIcons style={styles.image} name="user" size={24} color="black" />
          <Text style = {{fontSize: 20}}>2LT Andy Lim</Text>
          <TouchableOpacity 
              style={styles.chat} 
              onPress= {() => navigation.navigate("Chat")} title="Chat">
              <Text style = {styles.chatText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule a call</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule face to face</Text>
          </TouchableOpacity>
      </View>
  );
}

function ParaFifthScreen() {
  const navigation = useNavigation()
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <EvilIcons style={styles.image} name="user" size={24} color="black" />
          <Text style = {{fontSize: 20}}>2LT Cindy Lee</Text>
          <TouchableOpacity 
              style={styles.chat} 
              onPress= {() => navigation.navigate("Chat")} title="Chat">
              <Text style = {styles.chatText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule a call</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.chat}>
              {/* onPress= {() => navigation.navigate("SchedulePage")} title="SchedulePage"> */}
              <Text style = {styles.chatText}>Schedule face to face</Text>
          </TouchableOpacity>
      </View>
  );
}

function Chat() {
  return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <EvilIcons style={styles.image} name="user" size={24} color="black" />
          <Text style={{fontSize:16}}>Your chat begins here!</Text>
      </View>
  );
}

// function SchedulePage() {
//   return (
//       <Schedule></Schedule>
//   );
// }

const Stack = createStackNavigator()

export default function ParaStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name = "Paracounsellor Page" component = {ParaScreen} />
          <Stack.Screen name = "ChatHistory" component = {ChatHistory} />
          <Stack.Screen name = "ParaThirdScreen" component = {ParaThirdScreen} />
          <Stack.Screen name = "ParaFourthScreen" component = {ParaFourthScreen} />
          <Stack.Screen name = "ParaFifthScreen" component = {ParaFifthScreen} />
          <Stack.Screen name = "Chat" component = {Chat} />
          {/* <Stack.Screen name = "SchedulePage" component = {SchedulePage} /> */}
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
  chatHistory: {
    fontFamily: 'sans-serif',
    fontSize: 22,
    fontStyle: 'normal',
    color: 'white',
    padding: 5,
    position: 'absolute',
    width: 188,
    height: 40,
    alignItems: 'center',
    top: 4,
    
  },
  Para: {
    position: 'absolute',
    width: 246,
    height: 27,
    left: 20,
    top: 135,
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: '700',
    color: '#3A503C',
  },
  SearchIcon: {
    position: 'absolute',
    left: 30,
    top: 85,
  },
  counsellor1: {
    position: 'absolute',
    width: 370,
    height: 110,
    left: 9,
    top: 200,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    alignItems: 'center',
    margin: 4,
  },
  counsellor2: {
    position: 'absolute',
    width: 370,
    height: 110,
    left: 9,
    top: 330,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    alignItems: 'center',
    margin: 4,
  },
  counsellor3: {
    position: 'absolute',
    width: 370,
    height: 110,
    left: 9,
    top: 460,
    borderRadius: 15,
    paddingLeft: 10,
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    alignItems: 'center',
    margin: 4,
  },
  counsellorInfo: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    paddingTop: 26,
    color: 'white',
  },
  image: {
    fontSize: 200,
  },
  chat: {
    backgroundColor: '#558F6C',
    border: 1,
    borderRadius: 15,
    width: 243,
    height: 57,
    alignItems: 'center',
    margin: 20,
  },
  chatText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    padding: 17,
    color: 'white',
  }
});