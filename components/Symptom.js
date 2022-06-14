import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CheckBox from "expo-checkbox";

const Symptom = () => {
    const [agree1, setAgree1] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <CheckBox value={agree1}
                    onValueChange={() => setAgree1(!agree1)}
                    color={agree1 ? "#558F6C" : undefined}></CheckBox>
                <Text style={styles.text}>Sore Throat</Text>
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({    
    wrapper: {
      flexDirection: "row",
      paddingTop: 20,
      paddingHorizontal: 20,
    },
  
    text: {
      paddingHorizontal: 10,
    },

})

export default Symptom;