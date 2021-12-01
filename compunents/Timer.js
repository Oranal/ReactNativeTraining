import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Timer = () => {
    return (
        <View style={styles.timer}>
            <Text>here will be timer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    timer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    }
})


export default Timer
