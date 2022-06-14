import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomeScreen({ navigation }) {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.topbar}>
            <Text style={styles.title}>Welcome</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Updates</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>You have no updates at the moment.</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-serif",
    fontSize: 24,
    lineHeight: 29,
    marginLeft: 8,
    marginBottom: 18
  },
  topbar: {
    marginTop: 13,
    borderBottomWidth: 1,
    borderBotoonColor: "#0690A3"
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "sans-serif",
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
    height: 261,
    borderRadius: 15
  },
  cardTitle: {
    marginLeft: 14,
    marginTop: 14
  }
});
