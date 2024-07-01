import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerTab = () => {
    return (
        <View style={styles.container}>
            <Text>This is Drawer Tab</Text>
        </View>
    )
}

export default DrawerTab


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
})