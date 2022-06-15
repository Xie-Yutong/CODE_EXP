import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
    function ParaFollowUp () {
      return (
        <View>
          <Text style={styles.ParaF}>Paracounselling</Text>
          <Text style={styles.ParaS}>Paracousellor: Officer 2LT Andy</Text>
          <Text style={styles.ParaS}>Date: 13-June-2022</Text>
          <Text style={styles.ParaS}>Time: 0930 to 1000</Text>
          <Text style={styles.ParaS}>Format: Call</Text>
          <View style={styles.ParaButton}>
            <Button width="150" color="#6499FF"title="Feedback"/>
            <Button color="#E46A6A" title="Report"/>
          </View>
          
        </View>
      )
    }

    function ParaBook () {
      return (
        <View>
          <Text style={styles.ParaFpTitle}>ParaCounselling Session</Text>
          <Text style={styles.ParaSub}>Session Details</Text>
          <View style={styles.ParaCard}>
            <Text style={styles.ParaCardText}>Paracousellor: Officer 2LT Andy</Text>
            <Text style={styles.ParaCardText}>Date: 13-June-2022</Text>
            <Text style={styles.ParaCardText}>Time: 0930 to 1000</Text>
            <Text style={styles.ParaCardText}>Format: Call</Text>
          </View>
        </View>
      )
    }

    function MedFollowUp () {
      return (
        <View>
          <Text style={styles.ParaFpTitle}>Medical Follow up</Text>
          <Text style={styles.ParaSub}>Session Details</Text>
          <View style={styles.ParaCard}>
            <Text style={styles.ParaCardText}>Doctor: Officer 2LT Andy</Text>
            <Text style={styles.ParaCardText}>Date: 13-June-2022</Text>
            <Text style={styles.ParaCardText}>Time: 0930 to 1000</Text>
            <View style={styles.MedButton}>
              <Button color="#558f6c" title="e-medical certificate" />
            </View>
          </View>
        </View>
      )
    }

    function MedCentreBooking () {
      return (
        <View>
          <Text style={styles.ParaFpTitle}>Medical Session</Text>
          <Text style={styles.ParaSub}>Session Details</Text>
          <View style={styles.ParaCard}>
            <Text style={styles.ParaCardText}>Doctor: Officer 2LT Andy</Text>
            <Text style={styles.ParaCardText}>Date: 13-June-2022</Text>
            <Text style={styles.ParaCardText}>Time: 0930 to 1000</Text>
            <Text style={styles.ParaCardText}>Status: Confirmed</Text>
          </View>
        </View>
      )
    }

    function HomeScreen({navigation}) {
      return (
        <View>
        <View>
          <View style={styles.topbar}>
            <Text style={styles.title}>Welcome</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Appointments</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Paracounsellor follow-up</Text>
          <Text style={styles.cardSubtitle}>Click on 'View Details' to access the feedback form for your session.</Text>
          <View style={styles.cardButton}>
            <Button color="#558f6c" title="View Details" onPress={() => navigation.navigate('ParaFollowUp')}/>
          </View>
          <Text style={styles.cardTitle}>Paracounsellor booking</Text>
          <Text style={styles.cardSubtitle}>Your booking with [name], on [dd/mm/yyyy time], [status, is pending/has been confirmed!]</Text>
          <View style={styles.cardButton}>
          <Button color="#558f6c" title="View Details" onPress={() => navigation.navigate('ParaBook')}/>
          </View>
          <Text style={styles.cardTitle}>Medical Centre follow-up</Text>
          <Text style={styles.cardSubtitle}>Click on ‘View Details’ to access the details of your session and obtain your e-medical certificate and/or excusal letter.</Text>
          <View style={styles.cardButton}>
            <Button color="#558f6c" title="View Details" onPress={() => navigation.navigate('MedFollowUp')}/>
          </View>
          <Text style={styles.cardTitle}>Medical Centre Booking</Text>
          <Text style={styles.cardSubtitle}>Your booking with [name of counsellor], on [dd/mm/yyyy time], [status, is pending/has been confirmed!]</Text>
          <View style={styles.cardButton}>
          <Button color="#558f6c" title="View Details" onPress={() => navigation.navigate('MedCentreBooking')}/>
          </View>
        </View>
      </View>
      )
    }

    const HomeStack = createNativeStackNavigator();
    return (
      <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="ParaFollowUp" component={ParaFollowUp} />
          <HomeStack.Screen name="ParaBook" component={ParaBook} />
          <HomeStack.Screen name="MedFollowUp" component={MedFollowUp} />
          <HomeStack.Screen name="MedCentreBooking" component={MedCentreBooking} />
      </HomeStack.Navigator>
    );
  }

const styles = StyleSheet.create({
  title: {
    marginTop: 21,
    paddingLeft: 13,
    fontSize: 27,
    lineHeight: 29,
    marginLeft: 8,
    marginBottom: 13
  },
  topbar: {
    marginTop: 13,
    borderBottomWidth: 1,
    borderBotoonColor: "#0690A3"
  },
  subtitle: {
    fontSize: 22,
    lineHeight: 27
  },
  main: {
    marginLeft: 19,
    marginTop: 14,
    marginBottom: 10
  },
  card: {
    marginTop: 10,
    marginLeft: 17,
    marginRight: 17,
    borderWidth: 1,
    height: 500,
    borderRadius: 15
  },
  cardTitle: {
    marginLeft: 14,
    marginTop: 14,
    fontWeight: "bold",
    fontSize: 18
  },
  cardSubtitle: {
    marginLeft: 14,
    marginTop: 4,
  },
  cardButton: {
    width: 150,
    borderRadius: 14,
    marginTop: 3,
    marginLeft: 14,
  },
  ParaFpTitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  ParaSub: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 18,
  },
  ParaCard: {
    marginTop: 10,
    marginLeft: 21,
    marginRight: 21,
    borderWidth: 1,
    height: 500,
    borderRadius: 15
  },
  ParaCardText: {
    marginLeft: 14,
    marginTop: 14,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center"
  },
  ParaF: {
    marginLeft: 12,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 12
  },
  ParaS: {
    marginTop: 8,
    marginLeft: 12
  },
  ParaButton: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 15,
    borderRadius: 15
  },
  MedButton: {
    width: 210,
    borderRadius: 14,
    marginTop: 9,
    marginLeft: '28%'
  }
});


