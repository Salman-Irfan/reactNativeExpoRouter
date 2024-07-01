import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const User = (props:any) => {
    const { id } = useLocalSearchParams();
    console.log(id)
    return (
        <View style={styles.container}>
            <Text>This is User Screen {id} </Text>
        </View>
    )
}

export default User


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
})