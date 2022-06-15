import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.button}>
            <TextInput style={styles.searchInput} placeholder='Search the respective camp here...'/>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 370,
        height: 46,
        left: -168,
        top: -275,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 50,
        fontSize: 20,
    }
})

export default SearchBar