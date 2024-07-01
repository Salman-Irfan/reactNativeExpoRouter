import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            {/* details */}
            <Link href={`/details`} >
                <Text>Go to Details</Text>
            </Link>
            {/* dynamic names */}
            <Link 
                href={{
                    pathname: `/names/[id]`,
                    params: {id: `salman`}
                }}
            >
                <Text>Go to Names</Text>
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