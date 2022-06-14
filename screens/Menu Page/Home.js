import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
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
            <Button color="#558f6c" title="View Details"/>
          </View>
          <Text style={styles.cardTitle}>Paracounsellor booking</Text>
          <Text style={styles.cardSubtitle}>Your booking with [name], on [dd/mm/yyyy time], [status, is pending/has been confirmed!]</Text>
          <View style={styles.cardButton}>
          <Button color="#558f6c" title="View Details"/>
          </View>
          <Text style={styles.cardTitle}>Medical Centre follow-up</Text>
          <Text style={styles.cardSubtitle}>Click on ‘View Details’ to access the details of your session and obtain your e-medical certificate and/or excusal letter.</Text>
          <View style={styles.cardButton}>
            <Button color="#558f6c" title="View Details"/>
          </View>
          <Text style={styles.cardTitle}>Medical Centre Booking</Text>
          <Text style={styles.cardSubtitle}>Your booking with [name of counsellor], on [dd/mm/yyyy time], [status, is pending/has been confirmed!]</Text>
          <View style={styles.cardButton}>
          <Button color="#558f6c" title="View Details"/>
          </View>
        </View>
      </View>
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
  }
});

