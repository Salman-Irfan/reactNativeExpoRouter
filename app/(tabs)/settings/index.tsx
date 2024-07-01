import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Link href={`/details`} >
                <Text>Go to Details</Text>
            </Link>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
})