import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

function FeedbacknMC() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>You may find your e-medical certificate and/or excusal letter here.</Text>
        <TouchableOpacity 
          style={styles.buttons}>
            <Text style = {styles.feedbackButton}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttons}>
            <Text style = {styles.reportButton}>Report</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
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
  
});

export default FeedbacknMC;