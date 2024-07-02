import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Tasks = () => {
    const { id } = useLocalSearchParams();
    console.log(id)
    return (
        <View style={styles.container}>
            <Text>Task ID: </Text>
        </View>
    );
};

export default Tasks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
